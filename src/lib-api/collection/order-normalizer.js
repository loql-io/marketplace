export default async function collectionOrderNormalizer({ orderModel }) {
  return {
    cart: orderModel.cart,
    total: orderModel.total,
    additionalInformation: orderModel.metadata.additionalInformation,
    customer: {
      identifier: orderModel.customer.identifier,
      firstName: orderModel.customer.firstName,
      lastName: orderModel.customer.lastName,
      birthDate: Date,
      addresses: [...orderModel.customer?.addresses]
    },
    payment: [
      {
        provider: 'stripe',
        stripe: {
          stripe: null,
          customerId: null,
          orderId: null,
          paymentMethod: null,
          paymentMethodId: null,
          paymentIntentId: null,
          subscriptionId: null,
          metadata: orderModel.metadata.deliveryNote
        }
      }
    ]
  };
}
