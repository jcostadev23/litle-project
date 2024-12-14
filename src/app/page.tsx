"use client";
import { useRouter } from "next/navigation";
import Button from "./components/Button";
import styles from "./page.module.css";

export default function Home() {
  const router = useRouter();

  const handleClick = () => router.push("/CountPage");
  return (
    <div className={`${styles.customGrid}`}>
      <main className={`${styles.customFlex}`}>
        <h1>My litle project</h1>
        <Button label={"Count Page"} onClick={handleClick} />
      </main>
      <footer>
        <p>My litle project with storybook jest and cypress</p>
      </footer>
    </div>
  );
}
