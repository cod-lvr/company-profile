import { Fragment } from "react";
import Navbar from "./Navbar";

const Layer = (props) => {
  return (
    <Fragment>
      <Navbar />
      <main className='main'>{props.children}</main>
    </Fragment>
  );
};

export default Layer;