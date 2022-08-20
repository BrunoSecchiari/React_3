import Button from "./Button";
import Card from "./Card";
import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onConfirm}></div>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <main className={styles.content}>
          <p>{props.message}</p>
        </main>
        <footer className={styles.actions}>
          <Button onClick={props.onConfirm}>Close</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
