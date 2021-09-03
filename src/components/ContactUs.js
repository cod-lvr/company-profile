
import Form from "./Form"
import classes from './ContactUs.module.css';

const ContactUs = () => {
  return (
    <main className={classes["main"]}>
      <h3>contact us</h3>
      <div className={classes["box"]}>
        <div className={classes["content-box"]}>
          <p>
            making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident,
          </p>
        </div>
        <div className={classes["form"]}>
            <Form />
        </div>
      </div>
    </main>
  );
};

export default ContactUs;
