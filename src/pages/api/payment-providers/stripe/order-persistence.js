import { createCrystallizeOrder } from 'lib-api/crystallize/order';
import { emailOrderConfirmation } from 'lib-api/emails';
import { orderNormalizer } from 'lib-api/payment-providers/stripe';
import { validatePaymentModel } from 'lib-api/util/checkout';
import GetVoucherData from 'components/vouchers/getVoucherData';
import AddVoucherItemToCart from 'components/vouchers/addVoucherItemToCart';

export default async (req, res) => {
  try {
    const { paymentIntentId, paymentModel } = req.body;
    const validPaymentModel = await validatePaymentModel({ paymentModel });

    const validCrystallizeOrder = await orderNormalizer({
      paymentIntentId,
      paymentModel: validPaymentModel
    });

    const currency = validCrystallizeOrder.cart[0].price.currency || 'gbp';

    const voucher = GetVoucherData(validPaymentModel);

    const voucherCartItem = AddVoucherItemToCart(voucher, currency);

    if (voucher.hasVoucher) {
      validCrystallizeOrder.cart.push(voucherCartItem);
    }

    const createCrystallizeOrderResponse = await createCrystallizeOrder(
      validCrystallizeOrder
    );

    if (createCrystallizeOrderResponse.data.orders.create.id) {
      await emailOrderConfirmation(
        createCrystallizeOrderResponse.data.orders.create.id,
        req.body
      );
    }

    return res.status(200).send({
      success: true,
      ...createCrystallizeOrderResponse
    });
  } catch (error) {
    return res.status(503).send({
      success: false,
      error: error.stack
    });
  }
};
