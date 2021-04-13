export default function AddVoucherItemToCart(voucher, currency) {
  return {
    productId: voucher.voucherData.productId,
    sku: voucher.voucherData.code,
    quantity: 1,
    name: voucher.voucherData.name,
    imageUrl: undefined,
    price: {
      gross: -voucher.subtractDiscount,
      net: -voucher.subtractDiscount,
      tax: { name: 'none', percent: 0 },
      currency,
      discounts: [{ percent: 0 }]
    }
  };
}
