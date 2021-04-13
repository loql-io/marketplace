export function voucherRow(hasVoucher, voucher) {
  let voucherRow = '';
  if (hasVoucher) {
    voucherRow = `
      <tr>
        <td class="body-copy body-copy-bold" style="padding-bottom: 10px">Discount code ${hasVoucher}</td>
        <td class="body-copy" style="padding-bottom: 10px"></td>
        <td class="body-copy body-copy-bold" style="padding-bottom: 10px; text-align: right">
          ${voucher}
        </td>
      </tr>`;
  }
  return voucherRow;
}
