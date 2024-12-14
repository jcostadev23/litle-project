"use client";
import { useRouter } from "next/navigation";
import Button from "../components/Button";
import styles from "../page.module.css";

export default function Count() {
  const router = useRouter();
  return (
    <div className={`${styles.customGrid}`}>
      <h2>Count</h2>
      <Button label={"Home Page"} onClick={() => router.push("/")} />
    </div>
  );
}
