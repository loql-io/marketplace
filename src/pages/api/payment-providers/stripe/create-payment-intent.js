import { getClient } from 'lib-api/payment-providers/stripe';
import calculateStripeFee from 'lib-api/util/calculateStripeFee';
import { validatePaymentModel } from 'lib-api/util/checkout';

export default async (req, res) => {
  const connectedAccountId = process.env.NEXT_PUBLIC_STRIPE_ACCOUNT_ID;

  try {
    const { paymentModel } = req.body;
    const validPaymentModel = await validatePaymentModel({ paymentModel });

    const amount = validPaymentModel.total.gross * 100;

    const paymentIntent = await getClient().paymentIntents.create(
      {
        amount,
        currency: validPaymentModel.total.currency,
        application_fee_amount: calculateStripeFee(amount)
      },
      { stripeAccount: connectedAccountId }
    );

    return res.json(paymentIntent);
  } catch (error) {
    return res.status(503).send({
      success: false,
      error: error.stack
    });
  }
};
