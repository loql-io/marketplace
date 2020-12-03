//import mjml2html from '@nerdenough/mjml-ncc-bundle';

import { callOrdersApi } from 'lib-api/crystallize';
import QUERY_ORDER_BY_ID from 'lib-api/crystallize/graph/queries/order-by-id';
import { formatCurrency } from 'lib/currency';

import { sendEmail } from './utils';

const styles = require('./styles');

export default async function emailOrderConfirmationBusiness(orderId) {
  try {
    const response = await callOrdersApi({
      query: QUERY_ORDER_BY_ID,
      variables: {
        id: orderId
      },
      operationName: 'getOrder'
    });
    const order = response.data.orders.get;
    const { email } = order.customer.addresses[0];

    if (!email) {
      // Ideally an email address will always be provided, but if not...
      return;
    }

    const subjectLine = `${
      process.env.NEXT_PUBLIC_SHOP_NAME
        ? process.env.NEXT_PUBLIC_SHOP_NAME
        : process.env.NEXT_PUBLIC_CRYSTALLIZE_TENANT_IDENTIFIER
    } - Order Received`;

    const logo = `<img src="https://${
      process.env.NEXT_PUBLIC_SHOP_SUBDOMAIN
        ? process.env.NEXT_PUBLIC_SHOP_SUBDOMAIN
        : process.env.NEXT_PUBLIC_CRYSTALLIZE_TENANT_IDENTIFIER
    }.loql.ly/img/logo.png" width="88" height="88">`;

    const html = `<!doctype html>
    <html lang="en">
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <title>${subjectLine}</title>
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;900&display=swap" rel="stylesheet">
        <style>
          ${styles.css}
        </style>
      </head>
      <body>
      <table width="100%" style="text-align: center; background: #FAF6F6;">
        <tbody>
          <tr>
            <td align="center">
              <table style="max-width: 640px">
                <tbody>
                  <tr>
                    <td align="center" style="width: 100%; padding: 20px;">
                      ${logo}
                    </td>
                  </tr>
                  <tr>
                    <td align="center" style="padding: 20px;">
                      <h1 class="main-header">Order confirmed</h1>
                      <h2 style="color: #816E68; font-size: 24px; line-height: 28px; font-weight: 600; padding-bottom: 20px">Order ID: ${
                        order.id
                      }</h2>
                      <p style="font-size: 16px; line-height: 22px">
                        ${subjectLine}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td style="background-color: #ffffff; padding: 20px">
                      <table width="100%">
                        <tbody>
                          ${order.cart
                            .map(
                              (item) => `<tr>
                              <td class="body-copy" style="padding-bottom: 10px">${
                                item.name
                              } <span class="small">(${item.sku})<span></td>
                              <td class="body-copy" style="padding: 0 20px 10px 20px">${
                                item.quantity
                              }</td>
                              <td class="body-copy" style="padding-bottom: 10px; text-align: right">${formatCurrency(
                                {
                                  amount: item.price.gross * item.quantity,
                                  currency: item.price.currency
                                }
                              )}</td>
                            </tr>`
                            )
                            .join('')}
                          <tr>
                            <td class="body-copy body-copy-bold" style="padding-bottom: 10px">Total</td>
                            <td class="body-copy" style="padding-bottom: 10px"></td>
                            <td class="body-copy body-copy-bold" style="padding-bottom: 10px; text-align: right">
                              ${formatCurrency({
                                amount: order.total.gross,
                                currency: order.total.currency
                              })}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 30px 20px 20px 20px">
                      <h4 class="body-header">Customer details</h4>
                      <p class="body-copy">
                        ${order.customer.firstName} ${order.customer.lastName}
                      </p>
                      <p class="body-copy">
                        ${email}
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding: 40px"></td>
          </tr>
          <tr>
            <td style="background-color: #2F2B27;" align="center">
              <table>
                <tr>
                  <td align="center" style="padding:30px 0">
                    <table width="170">
                      <tr>
                        <td style="vertical-align: middle;"><span style="color: #FAF6F6;">Powered by</span></td>
                        <td>
                          <img src="https://loql.io/src/assets/dark-logo@2x.png" alt="loql.io" width="75" height="50">
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding: 0 20px;"><span style="font-size: 16px; color: #FAF6F6;">Open the door to online ordering for your business</span></td>
                </tr>
                <tr>
                  <td align="center" style="padding: 30px 0">
                  <div>
                    <!--[if mso]>
                    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://loql.io" style="height:34px;v-text-anchor:middle;width:160px;" arcsize="18%" strokecolor="#2F2B27" fillcolor="#E9E2DF">
                      <w:anchorlock/>
                      <center style="color:#2F2B27;font-size:16px;font-weight:bold;">Find out more</center>
                    </v:roundrect>
                    <![endif]--><a href="https://loql.io"
                    style="background-color:#E9E2DF;border:1px solid #2F2B27;border-radius:6px;color:#2F2B27;display:inline-block;font-size:16px;font-weight:bold;line-height:34px;text-align:center;text-decoration:none;width:160px;-webkit-text-size-adjust:none;mso-hide:all;">Find out more</a>
                  </div>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding: 30px 0"><span style="color: #C0A9A8;">&copy; 2020 Loql</span></td>
                </tr>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </html>`;

    await sendEmail({
      to: [
        `${process.env.NEXT_PUBLIC_LOQL_EMAIL}`,
        `${process.env.NEXT_PUBLIC_SHOP_EMAIL}`
      ],
      from: 'orders@loql.ly',
      subject: subjectLine,
      html: html,
      isMultiple: true
    });
  } catch (error) {
    Promise.resolve(error.stack);
  }
}
