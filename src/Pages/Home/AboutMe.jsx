export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/mary_photo.jpg" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          {/* <p className="section--title">About the Author</p> */}
          <h1 className="skills-section--heading">About the Author</h1>
          <p className="hero--section-description">
            "Born in St Louis, MO, I am the middle child of 5. I grew up mostly
            in central Illinois but graduated high school in southern Missouri.
            From there, I attended community college, focusing on graphic design
            and elementary education. I love art, music, the outdoors, bird
            watching, camping, and my family among other things. I got married
            in 1996, after which we bought our first home.
          </p>
          {/* <p className="hero--section-description">
            My amazing daughter was born in 1998 and then my brave son in 2000.
            I worked as a retail merchandise buying assistant for almost 13
            years before having to quit work and care for Brodin who had been
            diagnosed with Medulloblastoma at age 2. Our family learned to
            adjust to a medically sensitive child and extreme treatment
            protocols. Torn between hospitals in St. Louis and our home in
            illinois it was quite challenging. As treatment ended and Brodin
            recovered, so did our family. We learned to be brave individually in
            different ways.{" "}
          </p> */}

          <p className="hero--section-description">
            I have 2 children, Myia and Brodin, of which are both adults now.
            Brodin battled a childhood cancer which left him with disabilities.
            As a result, I devoted many years of employment to working with
            special needs students in our school district. I have always had the
            desire to write a children's book, and I finally had the opportunity
            this past year to pursue that dream. I am happy to share my first
            book about how Brodin gained bravery and developed his own way to
            overcome challenges. Stay tuned for the next one dedicated to my
            daughter. If you liked the first, you'll love the next."
          </p>
        </div>
      </div>
    </section>
  );
}
