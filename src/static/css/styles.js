import styled from 'styled-components';

export const Css = styled.main`
  & .css_wrapper {
    .h-xl {
      font-weight: 900;
      font-size: 45px;
      line-height: 45px;
      letter-spacing: -0.02em;
    }

    .h-l {
      font-weight: 900;
      font-size: 35px;
      line-height: 37px;
      letter-spacing: -0.02em;
    }
    .h-m {
      font-weight: 900;
      font-size: 30px;
      line-height: 41px;
      letter-spacing: -0.01em;
      color: #544b3f;
    }

    .h-s {
      font-weight: 800;
      font-size: 26px;
      line-height: 32px;
      letter-spacing: -0.01em;
      color: #544b3f;
    }

    p {
      font-size: 18px;
      line-height: 27px;
    }

    figure {
      margin-top: 20px;
      text-align: center;
    }

    figcaption {
      font-size: 14px;
      line-height: 19px;
      margin-top: 20px;
    }

    figcaption a {
      color: #fff;
      font-weight: 600;
      text-decoration: underline;
    }
    figcaption a:hover {
      text-decoration: none;
    }

    .image {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 0.5;
      min-height: 370px;
    }

    .image section {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      max-width: 333px;
      text-align: left;
      margin: 40px;
    }

    .image section h1 {
      font-size: 45px;
      font-weight: 900;
      letter-spacing: -0.02em;
      margin-bottom: 10px;
    }

    @media screen and (max-width: 768px) {
      .image section {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 333px;
        text-align: center;
        margin: 40px;
      }
      .image img {
        /*  width: 262px;*/
      }

      .wrapper .image section p {
        text-align: center;
      }
    }

    @media screen and (min-width: 768px) {
      .image {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
        flex: 0.5;
      }
      body .image section p {
        text-align: left !important;
      }
    }

    .wrapper,
    .main-wrapper {
      margin-top: 50px;
    }

    @media screen and (min-width: 768px) {
      .main-wrapper,
      .setup-wrapper,
      .demo-wrapper,
      .faq-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }

    .demo-wrapper,
    .faq-wrapper,
    .setup-wrapper,
    .call-wrapper {
      padding: 40px 20px;
      /*text-align: center;*/
    }

    .demo-wrapper p,
    .faq-wrapper p {
      padding: 0 40px;
      max-width: 660px;
      font-weight: 800;
      font-size: 24px;
      line-height: 28px;
    }

    .demo-wrapper h-l,
    .faq-wrapper h-l,
    .demo-wrapper h-m,
    .faq-wrapper h-s {
      padding-bottom: 8px;
      padding-top: 5px;
    }

    .faq-wrapper .content-copy h4 {
      color: #faf6f6;
    }

    .list-wrapper {
      list-style: none;
      display: flex;
      flex-direction: column;
    }

    .center-image {
      display: grid;
      justify-content: center;
      padding-top: 20px;
    }

    @media screen and (min-width: 768px) {
      .demo-wrapper,
      .faq-wrapper,
      .setup-wrapper {
        padding: 50px 20px;
      }

      .list-wrapper {
        flex-direction: row;
        max-width: 1024px;
      }
    }

    .demo-wrapper {
      background-color: #ffffff;
    }

    .demo-wrapper img {
      max-width: 90%;
    }

    .wrapper h1 {
      margin-bottom: 16px;
    }

    .wrapper .faq-wrapper {
      background-color: #faf6f6;
    }

    .wrapper .faq-wrapper p {
      color: #816e68;
      font-weight: 800;
      font-size: 24px;
    }

    .faq-wrapper a {
      text-decoration: underline;
      color: #faf6f6;
    }

    .wrapper-content {
      margin-bottom: 50px;
    }

    @media screen and (min-width: 768px) {
      .wrapper-content {
        display: flex;
        margin: 35px 0;
        max-width: 1024px;
      }
    }

    .content-copy img {
      float: right;
    }

    @media screen and (min-width: 768px) {
      .content-copy {
        padding: 0 10px;
      }
    }

    .content-copy {
      padding: 0 10px;
    }

    .call-wrapper {
      display: flex;
      flex-direction: column;
      width: 100%;
      background: #2f2b27;
      height: 230px;
      justify-content: center;
      align-items: center;
      color: #faf6f6;
    }

    .call-wrapper .h-xl {
      font-weight: 900;
      font-size: 30px;
      line-height: 41px;
      text-align: center;
      letter-spacing: -0.01em;
    }

    .call-wrapper p {
      font-weight: normal;
      text-align: center;
    }

    .call-wrapper a {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 25px;
      padding: 0.3em;
      width: 10em;
      height: 2.1em;
      border-radius: 30px;
      background-color: #6cbf84;
      color: #544b3f;

      text-decoration: none;
      font-weight: 800;
      font-size: 24px;

      transition: all ease-in 0.2s;
    }

    .call-wrapper a:hover {
      background-color: #544b3f;
      color: #faf6f6;
    }

    .setup-wrapper {
      /*display: grid;*/
      flex-direction: column;
      align-items: center;
      color: #fff;
      background-color: #2f2b27;
      text-align: left;
    }
    .setup-wrapper .h-xl {
      margin-bottom: 10px;
    }

    .setup-wrapper img {
      max-width: 500px;
    }

    .setup-wrapper .h-l {
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;

      letter-spacing: -0.02em;
    }
    .setup-wrapper .h-m {
      color: #fff;
      font-weight: 800;
      font-size: 24px;
      line-height: 28px;
      margin-bottom: 10px;
    }
    .setup-wrapper section {
      max-width: 100%;
      text-align: left;
      padding-left: 0px;
    }

    .setup-wrapper section p {
      font-size: 16px;
      line-height: 22px;
      color: #fff;
    }

    .setup-wrapper section ul {
      list-style: none;

      padding: 0;
    }

    @media screen and (min-width: 768px) {
      .setup-wrapper section {
        list-style: none;
      }

      .setup-wrapper section {
        min-width: 360px;
      }
    }
    @media screen and (max-width: 768px) {
      .setup-wrapper section {
        padding-left: 0px;
        margin: 20px;
        text-align: center;
      }
      .setup-wrapper .h-xl,
      .setup-wrapper .h-l {
        text-align: center;
      }
    }

    .setup-wrapper section ul li {
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      max-width: 300px;
    }

    .setup-wrapper section ul li img {
      margin: 34px 0 20px;
      height: 120px;
    }

    @media screen and (min-width: 768px) {
      .setup-wrapper li + li {
        margin-left: 20px;
      }
      .latest-post-container {
        width: 60%;
      }
    }

    .setup-wrapper section ul li .h-s {
      font-style: normal;
      font-weight: 800;
      font-size: 26px;
      line-height: 32px;

      text-align: center;
      letter-spacing: -0.01em;
    }

    .setup-wrapper section ul li p {
      font-style: normal;
      text-align: center;
    }

    .try-demo {
      display: flex;
      justify-content: center;
      flex: 1;
    }

    #more,
    #demo {
      display: flex;
      margin-top: 42px;
      flex: 1;
      justify-content: center;
    }

    #about,
    #demo {
      margin-top: 25px;
      padding: 0.3em 1.2em;
      width: 10em;
      height: 2.1em;
      border-radius: 30px;
      color: inherit;
      max-width: 240px;

      text-decoration: none;
      text-align: center;
      font-weight: 800;
      font-size: 24px;
      border: 3px solid #2f2b27;
      transition: all ease-in 0.2s;
    }

    #about:hover,
    #demo:hover {
      border-color: #6cbf84;
      color: #6cbf84;
    }

    .oragano-bg {
      background-color: #79d288;
    }

    .white-bg {
      background-color: #fff;
    }

    .sea-salt-bg {
      background-color: #faf6f6;
    }

    .white-bg section p,
    .white-bg .h-xl,
    .white-bg .h-l,
    .white-bg .h-m,
    .sea-salt-bg section p,
    .sea-salt-bg .h-xl,
    .sea-salt-bg .h-l,
    .sea-salt-bg .h-m {
      color: #2f2b27;
    }

    .oregano {
      color: #75db86 !important;
    }

    .white-bg figcaption,
    .white-bg figcaption a {
      color: #2f2b27;
    }

    .collapsible {
      background-color: #fff;
      color: #2f2b27;
      cursor: pointer;
      padding: 18px;
      width: 100%;
      border: none;
      text-align: left;
      outline: none;

      font-weight: bold;
      font-size: 20px;
      line-height: 26px;
    }

    .active,
    .collapsible:hover {
      /*background-color: #555;*/
    }

    .content {
      padding: 0 18px;
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.2s ease-out;
      color: #2f2b27;
      background-color: #fff;
      font-size: 16px;
      line-height: 22px;
      margin-bottom: 10px;
    }

    .content p {
      padding-bottom: 20px;
    }

    button.collapsible {
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      -webkit-tap-highlight-color: transparent;
    }

    button.collapsible:before {
      content: '\\002B';
      color: #c0a9a8;
      font-weight: bold;
      float: right;
      margin-left: 5px;
      font-size: 34px;
    }

    button.collapsible.active:before {
      content: '\\2212';
      color: #2f2b27;
    }

    .collapsible-grid-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
      gap: 10px 10px;
      grid-template-areas: '. .';
      max-width: 1000px !important;
      margin-top: 20px;
    }

    .setup-wrapper section.collapsible-grid-container {
      padding-left: 0 !important;
    }
    .collapsible-grid-wrapper {
      padding: 40px 20px;
    }

    @media screen and (max-width: 768px) {
      .collapsible-grid-container {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        gap: 0px 10px;
        grid-template-areas: '.';
        max-width: 1000px !important;
      }
      .content {
        margin-bottom: 10px;
        text-align: left;
      }
      .collapsible-grid-wrapper {
        padding: 40px 0px;
      }
    }

    .setup-wrapper-grid {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr;
      gap: 10px 10px;
      grid-template-areas: '. .';
      max-width: 1000px !important;
      margin-top: 20px;
    }

    .setup-wrapper-grid section {
      padding-left: 0;
    }
    .setup-wrapper-grid section h3,
    .setup-wrapper-grid section p {
      text-align: left !important;
      padding: 0 20px;
    }

    .setup-wrapper section .content p {
      color: #2f2b27;
      text-align: left !important;
    }

    .setup-wrapper-grid img {
      text-align: center;
      height: 130px;
      width: auto;
      margin-bottom: 30px;
      margin-left: 20px;
    }

    .image-container {
      min-width: 360px;
    }

    .setup-wrapper .image-container img {
      max-width: 330px;
    }

    .about-title p {
      padding: 0 20px;
    }

    @media screen and (max-width: 768px) {
      .setup-wrapper-grid {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 10px 10px;
        grid-template-areas: '. ';
        max-width: 1000px !important;
        margin-top: 20px;
      }
      .setup-wrapper-grid section h3,
      .setup-wrapper-grid section p {
        text-align: center !important;
      }
      .image-container {
        width: 300px;
        text-align: center;
      }
      .setup-wrapper img {
        width: 370px;
      }

      .setup-wrapper-grid img {
        width: auto;
      }
    }

    .submit-wrapper.secondary {
      width: 200px;
    }
    .submit-wrapper.secondary button,
    .submit-wrapper.secondary a {
      color: #fff;
      width: 100%;
      border: none;
      height: 44px;
      display: flex;
      padding: 0;
      font-size: 18px;
      background: #2f2b27;
      box-shadow: 0;
      transition: all ease-in-out 0.2s;
      align-items: center;
      font-weight: 800;
      border-radius: 8px;
      text-transform: initial;
      justify-content: center;
      margin: 30px auto 0 auto;
    }
    .submit-wrapper.secondary button:hover,
    .submit-wrapper.secondary a:hover {
      color: #fff;
      border-color: #816e68;
      background-color: #816e68;
    }

    .wrapper.about .setup-wrapper .h-xl {
      text-align: left;
    }

    @media screen and (max-width: 768px) {
      .submit-wrapper.secondary button,
      .submit-wrapper.secondary a {
        width: 200px;
      }
      .submit-wrapper.secondary {
        width: auto;
      }
      .wrapper.about .setup-wrapper .h-xl {
        text-align: center;
      }
    }

    .image-bg {
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }

    .latest-post h3 {
    }

    .MuiButton-contained {
      color: rgba(0, 0, 0, 0.87);
      box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
        0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
      background-color: #e0e0e0 !important;
    }

    .MuiButton-root {
      color: rgba(0, 0, 0, 0.87);
      padding: 6px 16px;
      font-size: 18px;
      min-width: 64px;
      box-sizing: border-box;
      transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      font-family: Nunito Sans, sans-serif;
      font-weight: 800;
      line-height: 1.75;
      border-radius: 4px;
      text-transform: capitalize;
    }

    .MuiButtonBase-root {
      color: inherit;
      border: 0;
      cursor: pointer;
      display: inline-flex;
      outline: 0;
      padding: 0;
      position: relative;
      align-items: center;
      user-select: none;
      border-radius: 0;
      vertical-align: middle;
      -moz-appearance: none;
      justify-content: center;
      text-decoration: none;
      background-color: transparent;
      -webkit-appearance: none;
      -webkit-tap-highlight-color: transparent;
    }

    .find-out-more {
      height: 28px;
      width: 140px;
      left: 0px;
      top: 0px;
      border-radius: 6px;
      color: rgb(47, 43, 39);
      font-size: 14px !important;
      margin: 20px 0;
    }

    a.more-posts {
      font-weight: 800;
      text-decoration: underline;
    }

    .setup-wrapper.latest-post section {
      padding-left: 0;
      margin: 0;
      max-width: initial;
    }

    .container {
      max-width: 904px;
    }

    .about .image section {
      margin: 0 40px;
    }

    .about .setup-wrapper .h-xl {
      font-size: 32px;
      line-height: 36px;
    }

    @media screen and (min-width: 768px) {
      .about .setup-wrapper {
        padding: 50px 20px 0;
      }
    }

    @media screen and (max-width: 768px) {
      .about .image section p {
        margin-top: 20px;
      }

      .about .image section {
        margin: 0;
      }
    }
  }
`;
