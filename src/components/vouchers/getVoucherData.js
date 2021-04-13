export default function GetVoucherData(basket, total) {
  const totalBeforeDiscount = total
    ? total
    : Number(basket.total.gross).toFixed(2);

  const voucherData = basket.metadata?.voucherCode;

  const hasVoucher = voucherData?.code;

  const discount = voucherData?.discountPercent
    ? `-${voucherData?.discountPercent}%`
    : `-£${voucherData?.discountAmount}`;

  const subtractDiscount = voucherData?.discountPercent
    ? totalBeforeDiscount * (voucherData?.discountPercent / 100)
    : voucherData?.discountAmount;

  const totalWithDiscount = hasVoucher
    ? totalBeforeDiscount - subtractDiscount
    : totalBeforeDiscount;

  return {
    totalBeforeDiscount,
    voucherData,
    hasVoucher,
    discount,
    subtractDiscount,
    totalWithDiscount
  };
}
