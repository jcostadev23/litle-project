import styles from "./Page.module.css";

export default function Home() {
  return (
    <div className={styles.customGrid}>
      <main className={styles.customFlex}>
        <h1 data-testid="cypress-title">My litle project</h1>
        <a href="/CountPage">Count Page</a>
      </main>
      <footer>
        <p>My litle project with storybook jest and cypress</p>
      </footer>
    </div>
  );
}
