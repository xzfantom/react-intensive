import { ReactNode, FC } from "react";
import styles from "./Container.module.css";

interface IContainerProps {
  children: ReactNode;
}

const Container: FC<IContainerProps> = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

export default Container;
