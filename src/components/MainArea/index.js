import React from "react";

import styles from "./styles.module.css";

export const MainArea = ({ children }) => {
  return <main className={styles.mainArea}>{children}</main>;
};
