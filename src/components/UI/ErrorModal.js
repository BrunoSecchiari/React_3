import React from "react";
import Button from "./Button";
import Card from "./Card";
import styles from "./ErrorModal.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  return (
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
  );
};

const ErrorModal = (props) => {
  return <React.Fragment>
    {}
  </React.Fragment>;
};

export default ErrorModal;
