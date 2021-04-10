import { simplyFetchFromGraph } from 'lib/graph';

module.exports = async function getCrystallizeVouchers(voucherCode) {
  const vouchersFromCrystallize = await simplyFetchFromGraph({
    query: `
      {
        catalogue(language: "en", path: "/vouchers") {
          children {
            name
            code: component(id: "code") {
              content {
                ... on SingleLineContent {
                  text
                }
              }
            }
            discount: component(id: "discount") {
              content {
                ... on ComponentChoiceContent {
                  selectedComponent {
                    id
                    content {
                      ... on NumericContent {
                        number
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  });

  if (
    !vouchersFromCrystallize.data ||
    !vouchersFromCrystallize.data.catalogue
  ) {
    return [];
  }

  const mappedVouchers = vouchersFromCrystallize.data.catalogue.children.map(
    (voucherFromCrystallize) => {
      const discountComponent =
        voucherFromCrystallize.discount.content.selectedComponent;

      let discountAmount = null;
      let discountPercent = null;
      if (discountComponent.id === 'percent') {
        discountPercent = discountComponent.content.number;
      } else {
        discountAmount = discountComponent.content.number;
      }
      return {
        code: voucherFromCrystallize.code.content.text,
        discountAmount,
        discountPercent
      };
    }
  );

  const voucher = mappedVouchers.find((v) => v.code === voucherCode) || null;

  return {
    isValid: Boolean(voucher),
    voucher
  };
};
