export default function generateOrderModel(
  router,
  checkoutState,
  locale,
  cart,
  metadata
) {
  // Handle locale with sub-path routing
  let multilingualUrlPrefix = '';

  let windowLocation;

  if (typeof window !== 'undefined') {
    windowLocation = window.location.pathname;
  }

  if (windowLocation.startsWith(`/${router.locale}/`)) {
    multilingualUrlPrefix = router.locale;
  }

  const { firstName, lastName, email, phone } = checkoutState;

  // Define the shared model
  const orderModel = {
    multilingualUrlPrefix,
    locale,
    cart,
    metadata,
    additionalInformation: checkoutState.checkoutType,
    customer: {
      firstName,
      lastName,
      identifier: email,
      addresses: [
        {
          type: 'delivery',
          email,
          phone,
          street: checkoutState?.street,
          postalCode: checkoutState?.postcode,
          streetNumber: checkoutState?.house,
          city: checkoutState?.city
        }
      ]
    }
  };
  return orderModel;
}
