import { Link } from "react-router-dom";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes["main"]}>
      <div className={classes["content-box"]}>
        <h2>buy and sell, find your next property.</h2>
        <p>the biggest real estate brokerage company.</p>
        <Link to="/about">
          <button className="btn">know more</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
