export default `
  query getOrder($id: ID!){
    orders {
      get(id: $id) {
        id
        total {
          net
          gross
          currency
          tax {
            name
            percent
          }
        }
        payment {
          ... on StripePayment {
            orderId
            customerId
            paymentMethod
            paymentIntentId
            subscriptionId
            metadata
          }
          ... on CustomPayment {
            provider
            properties {
              property
              value
            }
          }
        }
        cart {
          sku
          name
          quantity
          price {
            net
            gross
            currency
          }
          imageUrl
        }
        customer {
          firstName
          lastName
          identifier
          addresses {
            type
            email
            street
            street2
            streetNumber
            postalCode
            city
            phone
          }
        }
      }
    }
  }
`;
