import React from 'react';
import LatestPost from '../../page-components/latest-post';

import { Css } from '../css/styles';

export default function HomePage() {
  React.useEffect(() => {
    var coll = document.getElementsByClassName('collapsible');
    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener('click', function () {
        this.classList.toggle('active');
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    }
  }, []);

  return (
    <Css>
      <div className="css_wrapper">
        <div className="wrapper">
          <div className="image">
            <img src="/static/home-illustrations.svg" alt="Loql" />
            <section>
              <h1 className="h-xl">
                Power to the
                <br />
                <span className="oregano">local people</span>
              </h1>
              <p>
                Viable high streets, sustainable local transport and low-cost
                last mile delivery
              </p>
            </section>
          </div>

          <div className="faq-wrapper">
            <p className="centered">
              Loql helps communities become more resilient by putting power back
              in the hands of local people
            </p>
          </div>

          <div className="setup-wrapper">
            <div className="container">
              <h2 className="h-xl oregano">Collective community commerce</h2>
              <h3 className="h-l">
                Enabling local businesses to join forces to better serve local
                people.
              </h3>

              <br />
              <br />

              <div className="image">
                <figure>
                  <img src="/static/storekeepers.png" alt="storekeepers" />
                  <figcaption>
                    Images by{' '}
                    <a href="https://www.adamhollier.co.uk/">Adam Hollier</a>
                  </figcaption>
                </figure>
                <section>
                  <h3 className="h-m">
                    A digital marketplace for the whole high street
                  </h3>
                  <p>
                    One rich digital destination that showcases what makes the
                    real high street so good.
                  </p>
                  <br />
                  <h3 className="h-m">Cost-effective food ordering</h3>
                  <p>
                    A full featured food ordering platform for delivery,
                    takeaway or eat in orders.
                  </p>
                  <br />
                  <h3 className="h-m">Powerful tools for retailers</h3>
                  <p>
                    Create subscriptions, issue discounts, provide gift cards,
                    for one store or all.
                  </p>
                </section>
              </div>
            </div>
          </div>

          <div className="setup-wrapper white-bg">
            <div className="container">
              <h2 className="h-xl oregano">Sustainable local logistics</h2>
              <h3 className="h-l">
                A range of electric vehicles that bring people and things
                together in a more affordable and environmentally-friendly way
              </h3>

              <br />
              <br />

              <div className="image">
                <img src="/static/bike.png" alt="berko-car" />

                <section>
                  <h3 className="h-m">Electric-powered delivery</h3>
                  <p>
                    Look out for our incredible new delivery vehicles in your
                    high street soon!
                  </p>
                  <br />
                  <h3 className="h-m">Shared distribution</h3>
                  <p>
                    We believe that by pooling supply and demand for delivery,
                    we can make it affordable - while rewarding drivers fairly.
                  </p>
                  <br />
                  <h3 className="h-m">Keeping locals on the move</h3>
                  <p>
                    We’re working with local and national organisations to
                    accelerate the switch from the combustion engine.
                  </p>
                </section>
              </div>
            </div>
          </div>

          <div className="setup-wrapper sea-salt-bg collapsible-grid-wrapper">
            <div className="container">
              <h2 className="h-xl">So, tell me...</h2>

              <section className="collapsible-grid-container">
                <div className="group">
                  <button className="collapsible">How does it work?</button>
                  <div className="content">
                    <p>
                      We create and integrate tools and services for communities
                      to use together. We take the complexity out of adopting
                      new technologies and ways of doing things but also greatly
                      reduce the cost by spreading it across numerous
                      communities.
                    </p>
                  </div>
                  <button className="collapsible">
                    How do I join a Loql community?
                  </button>
                  <div className="content">
                    <p>
                      We currently have a pilot community operating in
                      Berkhamsted, Herts. If you are a business business in the
                      town please get in touch with Berkhamsted Loql for more
                      information about joining.
                    </p>
                  </div>
                </div>
                <div className="group">
                  <button className="collapsible">
                    Where are you going next?
                  </button>
                  <div className="content">
                    <p>
                      We will be looking to establish Loql communities in towns
                      across the UK over the coming months and years. If you are
                      interested in helping start a community in your area
                      please contact our Communities team
                    </p>
                  </div>
                  <button className="collapsible">
                    What do Loql get out of it?
                  </button>
                  <div className="content">
                    <p>
                      We’re firm believers in the power of local communities to
                      deliver global change. In that sense, our work is hugely
                      rewarding on a personal and collective level. We’re also a
                      not for profit so we only take what we need to operate and
                      any additinal income goes straight into developing even
                      better solutions for communities.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <LatestPost />

          <div className="setup-wrapper white-bg">
            <div className="container">
              <div className="setup-wrapper-grid">
                <section>
                  <img src="/static/pizza.webp" alt="Loql" />
                  <h3 className="h-m">We love all things local</h3>
                  <p>
                    Our goal is to help keep local profits, jobs, expertise and
                    ownership where it belongs - in the community.
                  </p>
                </section>
                <section>
                  <img src="/static/scales.webp" alt="scales" />
                  <h3 className="h-m">We only take what we need</h3>
                  <p>
                    Loql is a not for profit so every penny we make goes into
                    developing, running and improving our services.
                  </p>
                </section>
                <section>
                  <img src="/static/headshots.webp" alt="people" />
                  <h3 className="h-m">We&rsquo;re in this together</h3>
                  <p>
                    Loql enables collective change within communities that has
                    long-lasting impact for the entire planet.
                  </p>
                </section>
              </div>
              <div className="submit-wrapper secondary" style={{ padding: 20 }}>
                <a href="about">More about us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Css>
  );
}
