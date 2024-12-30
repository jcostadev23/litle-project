"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "../components/Button";
import styles from "../Page.module.css";
import { decrementCounter, incrementCounter } from "../utils/counter";
import {
  Language,
  useTranslation,
} from "../appProvider/TranslationProvider.tsx";
import Dropdown from "../components/Dropdown";

export default function Count() {
  const router = useRouter();
  const [value, setValue] = useState(0);
  const { t, language, switchLanguage } = useTranslation();

  const handleIncrement = () => setValue(incrementCounter(value));
  const handleDecrement = () => setValue(decrementCounter(value));
  const handleChangeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    switchLanguage(selectedValue as Language);
  };

  return (
    <div className={styles.customGrid}>
      <h2 data-testid="count-page-title">{t("countPage")}</h2>
      <h4 data-testid="count-value">{`${t("count")} ${value}`}</h4>
      <div
        data-testid="cypress-botton-container"
        className={styles.buttonContainer}
      >
        <Button
          data-testid="decrement"
          label={t("decrement")}
          onClick={handleDecrement}
        />
        <Button
          data-testid="increment"
          label={t("increment")}
          onClick={handleIncrement}
        />
      </div>
      <Dropdown selectedLanguage={language} onChange={handleChangeLanguage} />
      <p>{`${t("currentLanguage")} ${language}`}</p>
      <Button
        data-testid="homePage"
        label={t("homePage")}
        backgroundColor="danger"
        onClick={() => router.push("/")}
      />
    </div>
  );
}
