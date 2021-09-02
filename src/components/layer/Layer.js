import { Fragment } from "react";
import Navbar from "./Navbar";

const Layer = (props) => {
  return (
    <Fragment>
      <Navbar />
      <div className='main'>{props.children}</div>
    </Fragment>
  );
};

export default Layer;