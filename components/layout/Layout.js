import Link from "next/link";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <h2>Cars Website</h2>
          <p>Choose an Buy your car</p>
        </Link>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        <a href="https://alimohsenimoghadam.ir" target="_blank">
          Alimohsenimoghadam.ir
        </a>{" "}
        | Car Project &copy;
      </footer>
    </>
  );
};

export default Layout;
