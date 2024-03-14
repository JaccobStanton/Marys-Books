export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Available Now!</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Brodin's Magic</span>
            <br />
            Blankee
          </h1>
          <p className="hero--section-description">
            A heartwarming story about a boy's journey to find
            <br /> courage and comfort through an ordinary object
          </p>
        </div>
        <div className="btn-center">
          <button
            className="btn btn-primary"
            onClick={() =>
              window.open(
                "https://www.amazon.com/Brodins-Magic-Blankee-Mary-Elliott/dp/B0CTBH3SMR/ref=sr_1_2?crid=GAMSNTXHSYBQ&dib=eyJ2IjoiMSJ9.v_vPUXsaNnXFUg5YN8SaeQLbLx4GumihFcdoiowbF2k.BeZzflusM1M_7hAVQARbqnsnkEni7kJLbBjy3KILtp4&dib_tag=se&keywords=brodins+magic+blanket&qid=1709179255&sprefix=brodins+mag%2Caps%2C468&sr=8-2",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            Buy Now
          </button>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/book-cover.png" alt="Hero Section" />
      </div>
    </section>
  );
}
