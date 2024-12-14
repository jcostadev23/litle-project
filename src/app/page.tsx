import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.customGrid}>
      <main className={styles.customFlex}>
        <h1>My litle project</h1>
        <a href="/CountPage">Count Page</a>
      </main>
      <footer>
        <p>My litle project with storybook jest and cypress</p>
      </footer>
    </div>
  );
}
