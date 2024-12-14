"use client";
import { useRouter } from "next/navigation";
import Button from "../components/Button";
import styles from "../page.module.css";
import { decrementCounter, incrementCounter } from "../utils/counter";
import { useState } from "react";

export default function Count() {
  const router = useRouter();
  const [value, setValue] = useState(0);

  const handleIncrement = () => setValue(incrementCounter(value));
  const handleDecrement = () => setValue(decrementCounter(value));

  return (
    <div className={styles.customGrid}>
      <h2>Count Page</h2>
      <h4>Count: {value}</h4>
      <div className={styles.buttonContainer}>
        <Button label="Decrement" onClick={handleDecrement} />
        <Button label="Increment" onClick={handleIncrement} />
      </div>
      <Button
        label="Home Page"
        backgroundColor="danger"
        onClick={() => router.push("/")}
      />
    </div>
  );
}
