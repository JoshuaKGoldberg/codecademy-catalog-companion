import styles from "./styles.module.css";

export const Grid = ({ children }) => {
  return <div className={styles.grid}>{children}</div>;
};
