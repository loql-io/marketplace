export function getAddress(order) {
  if (
    order.additionalInformation === 'delivery' &&
    order.customer.addresses[0]
  ) {
    return `<h4 class="body-header">Delivery address</h4>
      <p class="body-copy">
        ${order.customer.addresses[0].streetNumber}
        ${order.customer.addresses[0].street}
        ${order.customer.addresses[0].postalCode}
        ${order.customer.addresses[0].city}
      </p>`;
  } else {
    return '';
  }
}
