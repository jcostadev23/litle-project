"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "../components/Button";
import styles from "../Page.module.css";
import { decrementCounter, incrementCounter } from "../utils/counter";

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
