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

        <section className="continer n1">
          <div className="user-information">
            <div className="user-text">
              <div className="frist-rext">
                <h4>PHOTOS</h4>
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
      </main>
    </>
  );
}

export default APP;
