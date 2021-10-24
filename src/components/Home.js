import "../styles/Home.css";

const Home = () => {
  return (
    <div className="Home">
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Neuro-Matter</title>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
        crossOrigin="anonymous"
      />
      <link
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
        integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
        crossOrigin="anonymous"
      />
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div className="container">
            <a className="navbar-brand" href="#navbarSupportedContent">
              Neuro-matter
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#home">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#features">
                    Our Work
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    Chat with Buddy
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#modules">
                    Our Work
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#team">
                    Team
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div className="jumbotron jumbotron-fluid height100p banner" id="home">
        <div className="container h100">
          <div className="contentBox h100">
            <h1>
              <b />
            </h1>
            <b></b>
          </div>
          <b></b>
        </div>
        <b></b>
      </div>
      <b>
        <section className="blog" id="features">
          <div className="container">
            <div className="row">
              <div className="offset-sm- col-sm-8">
                <div className="headerText">
                  <h1>What We Do!</h1>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="blogpost">
                  <div className="imgbx">
                    <img
                      src="./images/eq.jpg"
                      width={540}
                      height={100}
                      className="img-fluid"
                    />
                  </div>
                  <div className="content">
                    <h1>"Promotes Equality"</h1>
                    <p>
                      We believe that there should not be any injustice when it
                      comes to "Express" yourself, with our platform we aims to
                      minimize the social gap and improves the communication
                      among different groups of society.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="blogpost">
                  <div className="imgbx">
                    <img
                      src="./images/mental.jpg"
                      width={540}
                      height={550}
                      className="img-fluid"
                    />
                  </div>
                  <div className="content">
                    <h1>"Provides Hate Free Environment"</h1>
                    <p>
                      While onto current social media, we can see a hustel among
                      people when it comes to stand-out with
                      followers/friends/connections they have. With "Express",
                      we have removd the barriers and set sky as the limit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="blogpost">
                  <div className="imgbx">
                    <img
                      src="./images/brain-diagram.jpg"
                      width={540}
                      height={550}
                      className="img-fluid"
                    />
                  </div>
                  <div className="content">
                    <h1>"Helps Cure Neurogenic Disorders"</h1>
                    <p>
                      {" "}
                      Though the mental health is an issue of great concern, we
                      aim do do whatever possible in-order to provide you a
                      hate-free environment to sustain your calmness. Apart from
                      this, we have options such as confess and connect where
                      you can connct with people and distress yourself.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="blogpost">
                  <div className="imgbx">
                    <img
                      src="./images/news.jpg"
                      width={540}
                      height={1000}
                      className="img-fluid"
                    />
                  </div>
                  <div className="content">
                    <h1>"Improves Information/News Circulation"</h1>
                    <p>
                      When it comes to share meaningful information, there is no
                      better place than us where you can share almost every news
                      in form of a post among the group of people intreasted in
                      the same. We sims to spread hate free content only for
                      which we are using AI to cheeck for possible threats.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="sec2" id="about">
          <div className="container h100">
            <div className="contentBox h100">
              <div>
                <br />
                <h1>Hey Let's Talk!</h1>
                <br />
                <iframe
                  allow="microphone;"
                  width={375}
                  height={630}
                  src="https://console.dialogflow.com/api-client/demo/embedded/dea8e7c4-d563-45a4-92f5-c5d3f9b11705"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
        <section className="blog" id="modules">
          <div className="container">
            <div className="row">
              <div className="offset-sm- col-sm-8">
                <div className="headerText">
                  <h2>What We offer!</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="blogpost">
                  <div className="imgbx">
                    <img
                      src="./images/PMyd.gif"
                      width={540}
                      height={100}
                      className="img-fluid"
                    />
                  </div>
                  <div className="content">
                    <h1>Sh-Era</h1>
                    <p>
                      With Sh-Era we want you to share something that ment to be
                      shared, chose the topic that you like to write upon and
                      share news/incidents or anything you like regarding the
                      same. With Sh-Era we take you our from the hustel of
                      followers and likes but will show love through matters.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="blogpost">
                  <div className="imgbx">
                    <img
                      src="./images/QHTn.gif"
                      width={540}
                      height={100}
                      className="img-fluid"
                    />
                  </div>
                  <div className="content">
                    <h1>"Daily Digest"</h1>
                    <p>
                      Daily-Digest is a medium to send informative messages
                      through Twillo API to people everyday, all these messages
                      will only cover the positive aspect and will help to
                      promote equality with optimism.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="blogpost">
                  <div className="imgbx">
                    <img
                      src="./images/ZAbi.gif"
                      width={540}
                      height={550}
                      className="img-fluid"
                    />
                  </div>
                  <div className="content">
                    <h1>Buddy-Mate</h1>
                    <p>
                      {" "}
                      Buddy mate is an AI oriented chatbot that is designed to
                      inteeract with you in the best way possible and understand
                      your emotions through seentomental analysis of your
                      interaction and feedback.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="blogpost">
                  <div className="imgbx">
                    <img
                      src="./images/R8BQ.gif"
                      width={540}
                      height={100}
                      className="img-fluid"
                    />
                  </div>
                  <div className="content">
                    <h1>Meet-Treat</h1>
                    <p>
                      With Meet-Treat, we aim to provide you with a human
                      assisted session where our volunteers would help to
                      understand your issue and under the guidance of a proper
                      doctor, carry out talk sessions and activities for you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="sec1" id="team">
          <div className="container">
            <div className="row">
              <div className="offset-sm-2 col-sm-8">
                <div className="headerText text-center">
                  <h2>Meet The Team</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <div className="placeBox">
                  <div className="imgBx">
                    <img src="./images/vinamra.jpg" className="img-fluid" />
                  </div>
                  <div className="content">
                    <h3>
                      Vinamra Sharma
                      <br />
                      <span>vinamrasharma5@gmail.com</span>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="placeBox">
                  <div className="imgBx">
                    <img
                      src="./images/aab8b4f0-b672-4f99-8f2d-30c0c5a2c293.JPG"
                      className="img-fluid"
                    />
                  </div>
                  <div className="content">
                    <h3>
                      Shobhit Bhatt
                      <br />
                      <span>shobhit.bhatt.14@gmail.com</span>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="placeBox">
                  <div className="imgBx">
                    <img
                      src="./images/4054882d-d0e0-412d-94fe-0a1b882de2e3.JPG"
                      className="img-fluid"
                    />
                  </div>
                  <div className="content">
                    <h3>
                      Thivyaa
                      <br />
                      <span>mohanthivyaa@gmail.com</span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <ul className="sci">
                  <p className="cpryt">
                    © Copyright 2021 |{" "}
                    <a>All Rights Reserved to Team Neuro-Matter</a>
                  </p>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </b>
    </div>
  );
};

export default Home;
