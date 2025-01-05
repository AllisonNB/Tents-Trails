import classes from "./Alert.module.css";

const Alert = ({ hideAlert }) => {
  return (
    <div className={classes.box}>
      <h1 className={classes.alertText}>Important</h1>
      <p className={classes.alertText}>
        This website&#39s server is hosted on Render and may have a short delay
        on inital load.
      </p>
      <button onClick={hideAlert}>Okay</button>
    </div>
  );
};

export default Alert;
