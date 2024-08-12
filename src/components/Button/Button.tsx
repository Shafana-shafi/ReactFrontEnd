import React from 'react';
import styles from './Button.module.css';
import "../../App.css";
import "../../variable.css"

interface ButtonProps {
  label: string;
  onClick: (value: number) => void;
}
/**
 * Button component that displays a button with a label and triggers an action when clicked.
 *
 * @component
 * @example
 * <Button
 *   label="Click me"
 *   onClick={(value) => console.log(value)}
 * />
 *
 * @param {Object} props - The props object for the component.
 * @param {string} props.label - The text to display on the button. It may include a '%' sign which will be removed before triggering the click event.
 * @param {(value: number) => void} props.onClick - The function to call when the button is clicked. It receives the numeric value extracted from the label (after removing any '%' sign) as its argument.
 *
 * @returns {JSX.Element} The Button component.
 */
export function Button({ label, onClick }: ButtonProps) {
  return (
    <button
      className={`${styles.button}`}
      onClick={() => onClick(Number(label.replace('%', '')))}
    >
      {label}
    </button>
  );
}
