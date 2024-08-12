import { Button } from '../Button/Button';
import styles from './Selecttip.module.css';
import "../../App.css"
import "../../variable.css"

interface SelecttipProps {
  label: string;
  onClick: (tip: number) => void;
  tip: number;
}

/**
 * A component for selecting a tip percentage.
 *
 * @param {Object} props - Component props.
 * @param {string} props.label - Label for the tip selection.
 * @param {(tip: number) => void} props.onClick - Callback function to handle tip selection.
 * @param {number} props.tip - Current tip value.
 * 
 * @returns {JSX.Element} The Selecttip component.
 */

export function Selecttip({
  label,
  onClick,
  tip,
}: SelecttipProps) {

  const tips = [5, 10, 15, 20, 25];

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const customTip = parseFloat(event.target.value) || 0;
    customTip>=0 && onClick(customTip);

  };

  return (
    <>
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <div className={styles.buttonContainer}>
        {tips.map((tipValue, index) => (
          <Button
            key={index}
            label={`${tipValue}%`}
            onClick={(value) => {
              onClick(value);
            }}
          />
        ))}
        <input
          type="Number"
          className={styles.customButton}
          value={tip}
          onChange={handleOnChange}
          placeholder="Custom"
          onKeyPress={(event) => {
            if (event.key === '-' || event.key === '+') {
              event.preventDefault();
            }
          }}
          max={100}
        />
        </div>
        <div className={styles.errorMessage}>{(tip<0)?"Tip Cannot be Less than 0":""}</div>
      </div>
      
      </>
  );
}
