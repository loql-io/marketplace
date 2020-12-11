//import QUERY_ORDER_BY_ID from 'lib-api/crystallize/graph/queries/order-by-id';
//import { callOrdersApi } from 'lib-api/crystallize';
import newOrderCustomer from 'lib-api/emails/htmlTemplates/newOrder-customer';
import newOrderShop from 'lib-api/emails/htmlTemplates/newOrder-shop';
import { sendEmail } from './utils';

export default async function sendOrderConfirmation(orderId, body) {
  console.log(2, orderId);
  console.log(body.orderModel.cart);

  try {
    /*
    const response = await callOrdersApi({
      query: QUERY_ORDER_BY_ID,
      variables: {
        id: orderId
      },
      operationName: 'getOrder'
    });
  */
    //console.log(3, response);
    //const order = response.data.orders.get;
    //const email = order.customer.identifier;

    const order = body.orderModel;
    const email = body.orderModel.customer.identifier;
    console.log(3, order, email);
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

    const total = order.cart.reduce(
      (a, item) => a + item.price.gross * item.quantity,
      0
    );
    const currency = order.cart[0].price.currency;

    const newOrderEmails = [
      {
        to: email,
        from: process.env.NEXT_PUBLIC_LOQL_EMAIL,
        subject: subjectLineCustomer,
        html: newOrderCustomer(order, email, logo, orderId, total, currency)
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
          currency
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
