import classes from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <main className={classes["main"]}>
      <div className={classes["box"]}>
        <h3>Who we are ?</h3>
        <p>
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum
        </p>
        <button className="btn">see projects</button>
      </div>
    </main>
  );
};

export default AboutUs;
