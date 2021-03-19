import { Css } from '../css/styles';

export default function AboutPage() {
  return (
    <Css>
      <div className="css_wrapper">
        <div className="wrapper about">
          <section className="about-title centered">
            <h1 className="h-xl">About</h1>
            <p>
              Viable high streets, sustainable local transport and low-cost last
              mile delivery
            </p>
          </section>

          <br />
          <br />

          <div className="setup-wrapper">
            <div className="container">
              <div className="image">
                <div className="image-container">
                  <h2 className="h-xl">Keeping it local</h2>
                  <img
                    src="/static/High-street.svg"
                    alt="High-street"
                    style={{ marginTop: 34 }}
                  />
                </div>
                <section>
                  <p>
                    Our local communities are much more than simple collections
                    of homes. They are our support networks. Our culture and our
                    heritage. But most of all they are the fabric that hold us
                    together as a people.
                  </p>
                  <br />
                  <p>
                    But these most vital of fabrics are under threat. Local
                    retail and hospitality businesses, the beating heart of our
                    towns and villages, face unprecedented competition from
                    global technology platforms. Our streets are filled with
                    delivery vehicles bringing the convenience of online
                    ordering to our doors but polluting our air as they do. And
                    our local hubs sit dormant as people shun the pain of
                    parking their cars in favour of working or shopping from
                    home.
                  </p>
                </section>
              </div>
            </div>
          </div>

          <div className="setup-wrapper sea-salt-bg">
            <div className="container">
              <div className="image">
                <div className="image-container">
                  <h2 className="h-xl">Bringing locals together</h2>
                  <img
                    src="/static/locals-together.svg"
                    alt="locals-together"
                    style={{ marginTop: 34 }}
                  />
                </div>

                <section>
                  <p>
                    By coming together, local people and businesses have a
                    chance to tackle these economic and environmental threats.
                    And that’s where Loql comes in.
                  </p>
                  <br />
                  <p>
                    We build online marketplaces where local businesses can
                    easily sell their products or services to local people at
                    low cost and without losing control over how their business
                    runs. Very soon they will also have access to a pool of
                    electric delivery vehicles so orders reach customers in as
                    quick and eco-friendly way as possible.
                  </p>
                  <br />
                  <p>
                    We’re also working to help people move locally in a more
                    sustainble way with a fleet of electric vehicles based in
                    town centres and at rail stations that locals can lease.
                  </p>
                </section>
              </div>
            </div>
          </div>

          <div className="setup-wrapper white-bg">
            <div className="container">
              <div className="image">
                <div className="image-container">
                  <h2 className="h-xl">We are</h2>
                  <img
                    src="/static/Group.svg"
                    alt="Group"
                    style={{ marginTop: 20, width: 300 }}
                  />
                </div>

                <section>
                  <p>
                    Loql is a team of digital experts and local business owners
                    focused on making a difference to our high streets.
                    Berkhamsted is the first community we’re looking to help
                    with many more to follow across the UK.
                  </p>
                  <br />
                  <p>
                    We’re a not for profit organisation so any money we make
                    above our running costs is invested back into the products,
                    services and infrastructure we provide to those communities.
                  </p>
                  <br />
                  <p>
                    Loql is registered in the UK as a company limited by
                    guarantee (no.13036783)
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Css>
  );
}
