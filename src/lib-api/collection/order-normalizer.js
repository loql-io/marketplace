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
    }
  };
}
