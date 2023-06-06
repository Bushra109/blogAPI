import "./about.css";

export default function About() {
  return (
    <>
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
              <div className="inner-column">
                <div className="sec-title">
                  <span className="title">About IntrestHut</span>
                  <h2>
                    Visit our blog for the latest news, product updates, and
                    tips and tricks.
                  </h2>
                </div>
                <div className="text">
                  The best ideas can change who we are. Medium is where those
                  ideas take shape, take off, and spark powerful conversations.
                  We’re an open platform where over 100 million readers come to
                  find insightful and dynamic thinking. Here, expert and
                  undiscovered voices alike dive into the heart of any topic and
                  bring new ideas to the surface. Our purpose is to spread these
                  ideas and deepen understanding of the world.
                </div>
                <div className="text">
                  We’re creating a new model for digital publishing. One that
                  supports nuance, complexity, and vital storytelling without
                  giving in to the incentives of advertising. It’s an
                  environment that’s open to everyone but promotes substance and
                  authenticity. And it’s where deeper connections forged between
                  readers and writers can lead to discovery and growth. Together
                  with millions of collaborators, we’re building a trusted and
                  vibrant ecosystem fueled by important ideas and the people who
                  think about them.ut by professionals by using Photoshop and
                  adobe allustrator.
                </div>
                <div className="btn-box">
                  <a href="#" className="theme-btn btn-style-one">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>

            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column wow fadeInLeft">
                <div className="author-desc">
                  <h2>IntrestHut Stories</h2>
                  <span>Start reading..</span>
                </div>
                <figure className="image-1">
                  <a className="lightbox-image" data-fancybox="images">
                    <img
                      title="Rahul Kumar Yadav"
                      src="https://i.postimg.cc/cJXNYRBK/b6146d34cb9f0e5db31b53aaf7f37611-1.jpg"
                      alt=""
                    />
                  </a>
                </figure>
              </div>
            </div>
          </div>
          <div className="sec-title">
            <span className="title">Our Future Goal</span>
            <h2>We want to lead in innovation & Technology</h2>
          </div>
          <div className="text">
            Anyone can write on Medium. Thought-leaders, journalists, experts,
            and individuals with unique perspectives share their thinking here.
          </div>
          <div className="text">
            You’ll find pieces by independent writers from around the globe,
            stories we feature and leading authors, and smart takes on our own
            suite of blogs and publications.
          </div>
          <div className="text">
            A blank page is also a door. At IntrestHut you can walk through it.
            It's easy and free to share your thinking on any topic, connect with
            an audience, express yourself with a range of publishing tools, and
            even earn money for your work.
          </div>
          <div className="text">
            Here you can also share the content you create, if our technical
            team likes it, then we will also share it on our blog.
          </div>
          <div className="text">
            In the end, I would say keep visiting our website and enjoy the
            quality content.
          </div>
        </div>
      </section>
    </>
  );
}
