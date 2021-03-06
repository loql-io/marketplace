import { getClient } from 'lib-api/payment-providers/stripe';
import calculateStripeFee from 'lib-api/util/calculateStripeFee';
import { validatePaymentModel } from 'lib-api/util/checkout';
import GetVoucherData from 'components/vouchers/getVoucherData';

export default async (req, res) => {
  const connectedAccountId = process.env.NEXT_PUBLIC_STRIPE_ACCOUNT_ID;

  try {
    const { paymentModel } = req.body;

    const validPaymentModel = await validatePaymentModel({ paymentModel });

    const hasVoucher = validPaymentModel.metadata?.voucherCode;

    let amount = validPaymentModel.total.gross * 100;

    if (hasVoucher) {
      const voucher = await GetVoucherData(validPaymentModel);
      amount = voucher?.totalWithDiscount * 100;
    }

    const paymentIntent = await getClient().paymentIntents.create(
      {
        amount,
        currency: validPaymentModel.total.currency,
        payment_method_types: ['card'],
        application_fee_amount: calculateStripeFee(amount),
        receipt_email: paymentModel.customer.identifier
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
