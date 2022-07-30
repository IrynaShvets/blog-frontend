import React from "react";
import { Hearts } from "react-loader-spinner";
import styles from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.root}>
      <Hearts color="#b43bc4" height={150} width={150} />
    </div>
  );
};

export default Loader;
