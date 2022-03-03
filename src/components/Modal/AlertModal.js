import Card from "../Card/Card";
import classes from "./Alert.module.css";

const AlertModal = (props) => {
  return (
    <div>
      <div className={classes.modal} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <div>{props.title}</div>
        </header>
        <div className={classes.content}>
          <div>{props.image}</div>
        </div>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.action}>
          <button>OK</button>
        </footer>
      </Card>
    </div>
  );
};
