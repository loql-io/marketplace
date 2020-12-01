import { getClient } from './index';

export default async function stripeOrderNormalizer({
  paymentIntentId,
  paymentModel
}) {
  const paymentIntent = await getClient().paymentIntents.retrieve(
    paymentIntentId
  );

  const { data } = paymentIntent.charges;
  const charge = data[0];

  const customerName = charge.billing_details.name.split(' ');

  return {
    cart: paymentModel.cart,
    total: paymentModel.total,
    additionalInformation: paymentModel.additionalInformation,
    customer: {
      identifier: '',
      firstName: customerName[0],
      middleName: customerName.slice(1, customerName.length - 1).join(),
      lastName: customerName[customerName.length - 1],
      birthDate: Date,
      addresses: [...paymentModel.customer?.addresses]
    },
    payment: [
      {
        provider: 'stripe',
        stripe: {
          stripe: charge.id,
          customerId: charge.customer,
          orderId: charge.payment_intent,
          paymentMethod: charge.payment_method_details.type,
          paymentMethodId: charge.payment_method,
          paymentIntentId: charge.payment_intent,
          subscriptionId: charge.subscription,
          metadata: ''
        }
      }
    ]
  };
}
