import { createCrystallizeOrder } from 'lib-api/crystallize/order';
import { emailOrderConfirmation } from 'lib-api/emails';
import collectionOrderNormalizer from 'lib-api/collection/order-normalizer';
import { validatePaymentModel } from 'lib-api/util/checkout';

export default async (req, res) => {
  try {
    const { orderModel: paymentModel } = req.body;

    const validPaymentModel = await validatePaymentModel({
      paymentModel
    });

    const validCrystallizeOrder = await collectionOrderNormalizer({
      orderModel: validPaymentModel
    });

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
