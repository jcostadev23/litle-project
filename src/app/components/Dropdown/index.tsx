import { useState } from "react";
import styles from "./Dropdown.module.css";

type Props = {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  selectedLanguage: string;
};

const Dropdown = ({ onChange, selectedLanguage }: Props) => {
  const [language, setLanguage] = useState(selectedLanguage);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setLanguage(value);
    onChange(event);
  };

  return (
    <>
      <label className={styles.dropdownLabel}>Escolha um idioma:</label>
      <select
        id="language"
        className={styles.dropdownSelect}
        name="language"
        value={language}
        onChange={handleChange}
      >
        <option value="pt">Português</option>
        <option value="en">Inglês</option>
      </select>
    </>
  );
};
export default Dropdown;
