function APP() {
  let son = 11;
  let title = "salom hamaga";
  return (
    <>
      <header>
        <nav className="navBar  continer">
          <img src="/Group 31.svg" alt="" />
          <div className="links">
            <a href="#">Abute</a>
            <a href="#">Service</a>
            <a href="#">Works</a>
            <a href="#">Blog</a>
          </div>
          <img src="/Menu.svg" alt="" />
        </nav>
      </header>
      <main>
        <section className="continer hiro">
          <div className="hiro-sec">
            <div className="info">
              <p className="helo">helo</p>
              <h1 className="name">ADAM ZaKOB</h1>

              <a href="https://app.clickup.com/90182802789/v/l/2kzn0qb5-318">
                <button className="talk-btn">lets talk</button>
              </a>
            </div>
            <div className="img">
              <img className="img-hiro" src="/user.svg" alt="" />
            </div>
          </div>
        </section>
        <section className="continer">
          <div className="informations">
            <div className="info-text">
              <h4>Service</h4>
              <h1>What actually I love to do</h1>
            </div>
            {/* second info sec */}
            <div className="boxs  continer">
              <div className="box">
                <div className="box-img">
                  <img src="/ux.svg" alt="" />
                  <h2>UX Research</h2>
                </div>
                <div className="box-info">
                  <p>
                    New demos are continually added and buying a single license
                    for Mak gives you access to all of what's shown below, plus
                    everything that will be added in the future.
                  </p>
                </div>
              </div>
              <div className="box">
                <div className="box-img">
                  <img src="/ux.svg" alt="" />
                  <h2>Brand Design</h2>
                </div>
                <div className="box-info">
                  <p>
                    New demos are continually added and buying a single license
                    for Mak gives you access to all of what's shown below, plus
                    everything that will be added in the future.
                  </p>
                </div>
              </div>
              <div className="box">
                <div className="box-img">
                  <img src="/ux.svg" alt="" />
                  <h2>Web Development</h2>
                </div>
                <div className="box-info">
                  <p>
                    New demos are continually added and buying a single license
                    for Mak gives you access to all of what's shown below, plus
                    everything that will be added in the future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className=" n1">
          <div className="user-information continer">
            <div className="user-text">
              <div className="frist-rext">
                <h4 className="ph">PHOTOS</h4>
                <h1>All Creative Projects</h1>
              </div>
              <div className="seconod-tect">
                <img src="Explore.svg" alt="" />
              </div>
            </div>
            <div className="users-images continer">
              <div>
                <img src="5.png" alt="" />
              </div>
              <div>
                <img src="6.png" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="clients continer">
          <div className="clients-text">
            <h4 className="ph">clients</h4>
            <h1>Big DeaWith</h1>
          </div>
          <div className="socials">
            <a href="https://slack.com/">
              <div className="app">
                <img src="/slack.svg" alt="" />
                <h5>Slack</h5>
              </div>
            </a>
            <a href="https://medium.com/">
              <div className="app">
                <img src="/medium.svg" alt="" />
                <h5>Medium</h5>
              </div>
            </a>
            <a href="https://www.microsoft.com/en-us">
              <div className="app">
                <img src="/Micrasorf.svg" alt="" />
                <h5>Microsoft</h5>
              </div>
            </a>
            <a href="https://zeplin.io/">
              <div className="app">
                <img src="/Zeplin.svg" alt="" />
                <h5>Zeplin</h5>
              </div>
            </a>
            <a href="https://www.shopify.com/">
              <div className="app">
                <img src="/Shopify.svg" alt="" />
                <h5>Shopify</h5>
              </div>
            </a>
          </div>
        </section>
        {/* next sec */}

        <section className="UI">
          <div className="continer  ui">
            <div className="uibox">
              <h4 className="ph">Testimonials</h4>
              <h1>What People Says</h1>
            </div>
            <div className="user-info-box">
              <img src="/1.svg" alt="" />
              <p>
                Quote testimonials demonstrate support for your product or
                feature <br /> from a user who has experience with it. This can
                be significantly more <br /> effective than traditional
                advertising methods as most consumers will trust.
              </p>

              <img className="g16" src="/16.svg" alt="" />
              <h3>Michal John</h3>
            </div>
          </div>
        </section>

        <section className="UI">
          <div className="continer blogs">
            <div className="blog-text">
              <p className="ph">Blog</p>
              <h1>Get News Feeds</h1>
            </div>
            <div className="blog">
              <img src="/13.svg" alt="" />
              <p className="ph">20 June/2020</p>
              <h2>
                Technology is evolving rapidly. <br /> New devices and
                applications.
              </h2>
            </div>
            <div className="blog">
              <img className="blog-img" src="/13.svg" alt="" />
            </div>
            <div className="blog">
              <img className="blog-img" src="/13.svg" alt="" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default APP;
