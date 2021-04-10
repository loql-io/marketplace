import newOrderCustomer from 'lib-api/emails/htmlTemplates/newOrder-customer';
import newOrderShop from 'lib-api/emails/htmlTemplates/newOrder-shop';
import { sendEmail } from './utils';

export default async function sendOrderConfirmation(orderId, body) {
  try {
    const order = body?.orderModel ? body.orderModel : body.paymentModel;

    const email = body?.orderModel
      ? body.orderModel.customer.identifier
      : body.paymentModel.customer.identifier;

    const logo = `<img src="https://${
      process.env.NEXT_PUBLIC_SHOP_SUBDOMAIN
        ? process.env.NEXT_PUBLIC_SHOP_SUBDOMAIN
        : process.env.NEXT_PUBLIC_CRYSTALLIZE_TENANT_IDENTIFIER
    }.loql.ly/img/logo.png" style="border-radius:50%;width:126px;height:126px">`;

    const subjectLineShop = `${
      process.env.NEXT_PUBLIC_SHOP_NAME
        ? process.env.NEXT_PUBLIC_SHOP_NAME
        : process.env.NEXT_PUBLIC_CRYSTALLIZE_TENANT_IDENTIFIER
    } - Order Received`;

    const subjectLineCustomer = `Thank you for your order from ${
      process.env.NEXT_PUBLIC_SHOP_NAME
        ? process.env.NEXT_PUBLIC_SHOP_NAME
        : process.env.NEXT_PUBLIC_CRYSTALLIZE_TENANT_IDENTIFIER
    } (${orderId})`;

    const deliveryNote = body.paymentModel
      ? body.paymentModel.metadata.deliveryNote
      : '';

    const total = order.cart.reduce(
      (a, item) => a + item.price.gross * item.quantity,
      0
    );

    const currency = order.cart[0].price.currency;

    const totalBeforeDiscount = total;

    const voucherData = order.metadata?.voucherCode;

    const hasVoucher = voucherData?.code.length > 0;

    const code = voucherData?.code;

    const subtractDiscount = voucherData?.discountPercent
      ? totalBeforeDiscount * (voucherData?.discountPercent / 100)
      : voucherData?.discountAmount;

    const voucher = voucherData?.discountPercent
      ? `-${voucherData?.discountPercent}%`
      : `-£${voucherData?.discountAmount}`;

    const totalWithDiscount = hasVoucher
      ? totalBeforeDiscount - subtractDiscount
      : totalBeforeDiscount;

    const newOrderEmails = [
      {
        to: email,
        from: process.env.NEXT_PUBLIC_LOQL_EMAIL,
        subject: subjectLineCustomer,
        html: newOrderCustomer(
          order,
          email,
          logo,
          orderId,
          total,
          currency,
          deliveryNote,
          totalWithDiscount,
          hasVoucher,
          voucher,
          code
        )
      },
      {
        to: [
          `${process.env.NEXT_PUBLIC_LOQL_EMAIL}`,
          `${process.env.NEXT_PUBLIC_SHOP_EMAIL}`
        ],
        from: process.env.NEXT_PUBLIC_LOQL_EMAIL,
        subject: subjectLineShop,
        html: newOrderShop(
          order,
          email,
          subjectLineShop,
          logo,
          orderId,
          total,
          currency,
          deliveryNote,
          totalWithDiscount,
          hasVoucher,
          voucher,
          code
        ),
        isMultiple: true
      }
    ];
    if (order) {
      await sendEmail(newOrderEmails);
    }
  } catch (error) {
    Promise.resolve(error.stack);
  }
}
