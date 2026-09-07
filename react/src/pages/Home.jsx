import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <p className="welcome">WELCOME TO OUR STORE</p>

        <h1>
          Find Everything <br />
          You Need in One Place
        </h1>

        <p className="description">
          Discover quality products at affordable prices.
          <br />
          Shop easily and find your favorites.
        </p>

        <Link to="/products">
          <button className="shop-btn">Shop Now →</button>
        </Link>
      </div>
      <div className="home-image">
        🛍️
      </div>
    </div>
  );
};

export default Home;