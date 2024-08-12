import React, { useId } from 'react';
import styles from './InputComponent.module.css';
import dollarIcon from '../../assets/dollar-sign-svgrepo-com.svg';
import personIcon from '../../assets/profile.svg';
import "../../App.css";

interface InputComponentProps extends React.ComponentProps<"input"> {
  label: string;
  typeOfIcon: 'person' | 'dollar';
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * A numeric input field with an associated icon and label.
 *
 * @param {Object} props - Component props.
 * @param {string} props.label - Label for the input field.
 * @param {'person' | 'dollar'} props.typeOfIcon - Type of icon to display (either 'person' or 'dollar').
 * @param {number} props.value - Current value of the input field.
 * @param {React.ChangeEventHandler<HTMLInputElement>} props.onChange - Event handler for input value changes.
 * 
 * @returns {JSX.Element} The InputComponent element.
 */

export function InputComponent({ label, typeOfIcon, value, onChange }: InputComponentProps) {
  const iconSrc = typeOfIcon === 'person' ? personIcon : dollarIcon;
  const inputId = useId();

  const isError = value === 0;
  const isEmpty = value === null || value === undefined || value.toString() === "";

  console.log("Rendered InputComponent with value:", value);

  return (
    <div className={styles.container}>
      <label htmlFor={inputId} className={styles.label}>{label}</label>
      <div className={styles.inputWrapper}>
        <img className={styles.icon} src={iconSrc} alt={`${typeOfIcon} icon`} />
        <input
          type="number"
          id={inputId}
          className={`${styles.numberInput} ${isError ? styles.error : ""}`}
          value={value}
          onChange={(event) => {
            console.log("Input onChange event:", event.target.value);
            onChange(event);
          }}
          onKeyPress={(event) => {
            if (event.key === '-' || event.key === '+') {
              event.preventDefault();
            }
          }}
        />
      </div>
      <div className={styles.errorMessage}>
        {typeOfIcon === "dollar" && isError && !isEmpty && "Bill amount cannot be Zero"}
      </div>
    </div>
  );
}
