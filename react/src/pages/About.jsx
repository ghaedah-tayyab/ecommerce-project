
import "./About.css";

const About = () => {
  return (
    <div className="about">

      <section className="about-hero">
        <h1>About Our Store</h1>
        <p>
          Your trusted online store for quality products at affordable prices.
        </p>
      </section>

      <section className="about-content">
        <div>
          <h2>Who We Are</h2>
          <p>
            We are an online shopping store dedicated to making everyday
            shopping simple, convenient, and affordable. Our store offers a
            variety of quality products carefully selected for our customers.
          </p>
        </div>

        <div>
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide a smooth and reliable shopping
            experience. We want our customers to easily find the products
            they need and enjoy a simple checkout experience.
          </p>
        </div>
      </section>

      <section className="why-us">
        <h2>Why Shop With Us?</h2>

        <div className="features">
          <div>
            <h3>Quality Products</h3>
            <p>We focus on providing reliable and quality products.</p>
          </div>

          <div>
            <h3>Affordable Prices</h3>
            <p>We offer products at prices that provide great value.</p>
          </div>

          <div>
            <h3>Easy Shopping</h3>
            <p>Browse products, add them to your cart, and shop with ease.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;

