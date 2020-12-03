exports.css = `
  /* vietnamese */
  @font-face {
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 400;
    src: local('Nunito Sans Regular'), local('NunitoSans-Regular'), url(https://fonts.gstatic.com/s/nunitosans/v5/pe0qMImSLYBIv1o4X1M8cceyI9tAcVwob5A.woff2) format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 400;
    src: local('Nunito Sans Regular'), local('NunitoSans-Regular'), url(https://fonts.gstatic.com/s/nunitosans/v5/pe0qMImSLYBIv1o4X1M8ccezI9tAcVwob5A.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 400;
    src: local('Nunito Sans Regular'), local('NunitoSans-Regular'), url(https://fonts.gstatic.com/s/nunitosans/v5/pe0qMImSLYBIv1o4X1M8cce9I9tAcVwo.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* vietnamese */
  @font-face {
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 900;
    src: local('Nunito Sans Black'), local('NunitoSans-Black'), url(https://fonts.gstatic.com/s/nunitosans/v5/pe03MImSLYBIv1o4X1M8cc8-BM5iU1ECVZl_86Y.woff2) format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 900;
    src: local('Nunito Sans Black'), local('NunitoSans-Black'), url(https://fonts.gstatic.com/s/nunitosans/v5/pe03MImSLYBIv1o4X1M8cc8-BM5jU1ECVZl_86Y.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 900;
    src: local('Nunito Sans Black'), local('NunitoSans-Black'), url(https://fonts.gstatic.com/s/nunitosans/v5/pe03MImSLYBIv1o4X1M8cc8-BM5tU1ECVZl_.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  html,
  body,
  div,
  span,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  abbr,
  address,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  samp,
  small,
  strong,
  sub,
  sup,
  var,
  b,
  i,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
    font-family: Nunito Sans, sans-serif;
  }

  body {
    line-height: 1;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  nav ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }

  a {
    margin: 0;
    padding: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
  }

  /* change colours to suit your needs */
  ins {
    background-color: #ff9;
    color: #000;
    text-decoration: none;
  }

  /* change colours to suit your needs */
  mark {
    background-color: #ff9;
    color: #000;
    font-style: italic;
    font-weight: bold;
  }

  del {
    text-decoration: line-through;
  }

  abbr[title],
  dfn[title] {
    border-bottom: 1px dotted;
    cursor: help;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* change border colour to suit your needs */
  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #cccccc;
    margin: 1em 0;
    padding: 0;
  }

  input,
  select {
    vertical-align: middle;
  }

  h1,
  h3,
  h4 {
    margin-bottom: 20px;
  }

  h1 {
    font-size: 45px;
    font-weight: 900;
    line-height: 45px;
    letter-spacing: -0.02em;
  }

  h3 {
    font-size: 45px;
    font-weight: 900;
    line-height: 45px;
    letter-spacing: -0.02em;
  }

  h4 {
    font-style: normal;
    font-weight: 800;
    font-size: 26px;
    line-height: 32px;
    text-align: center;
    letter-spacing: -0.01em;
  }

  body {
    background-color: #FAF6F6;
    color: #2F2B27;
  }

  .header {
    height: 60px;
    padding: 5px 20px;
    background: white;
    box-shadow: 0 2px 6px rgba(192, 169, 168, 0.5);
    align-items: center;
  }

  .header-icon-wrapper {
    height: 50px;
    width: 75px;
  }

  .main-content {
    padding: 40px 0px;
  }

  @media screen and (min-width: 1024px) {
    .main-content {
      width: 60%;
      margin: 0 auto;
    }
  }

  .main-header {
    text-align: center;
  }

  .body-header {
    text-align: left;
  }

  .subcontent-box {
    text-align: left;
  }

  .subcontent {
    padding: 20px;
    background-color: white;
  }

  .subcontent-row {
    display: flex;
    justify-content: space-between;
  }

  .subcontent-container {
    padding: 20px 20px 0 20px;
  }

  .main-body-copy,
  .body-copy {
    line-height: 25px;
  }

  .body-copy {
    margin-bottom: 15px;
    font-size: 18px;
  }

  .body-copy-bold {
    font-weight: 900;
  }

  .small {
    font-size: 14px;
  }

  .body-copy-main {
    text-align: center;
  }

  .body-copy-large {
    font-size: 22px;
    line-height: 29px;
    text-align: center;
    margin-bottom: 15px;
  }

  .business-name {
    font-size: 20px;
    font-weight: 600;
  }

  .options {
    font-size: 14px;
    line-height: 19px;
  }

  .order-type-confirmation {
    font-size: 24px;
    font-weight: 800;
    color: #816E68;
    margin-top: 20px;
    letter-spacing: -0.01em;
    font-style: normal;
  }

  .order-type-cancellation {
    color: #F26968;
  }

  .allergies-intolerances {
    color: #F26968;
  }

  .phone-number {
    font-size: 20px;
    line-height: 29px;
  }

  .margin-top-20 {
    margin-top: 20px;
  }

  .tableNumber{
    border: solid 2px #2F2B27;
    font-size: 13px;
    padding: 2px 4px;
    font-weight: 800;
  }

  `;
