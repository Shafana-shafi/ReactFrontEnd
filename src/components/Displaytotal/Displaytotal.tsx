import React from 'react';
import styles from './Displaytotal.module.css';
import Totalitem from '../Totalitem/Totalitem';
import "../../App.css"
import "../../variable.css"

interface DisplaytotalProps {
  tipPerPerson?: string|number;
  totalPerPerson?: string|number;
  handleReset: () => void;
}

/**
 * Displays tip and total amounts per person and provides a reset button.
 *
 * @param {Object} props - Component props.
 * @param {string | number} [props.tipPerPerson] - Tip amount per person.
 * @param {string | number} [props.totalPerPerson] - Total amount per person.
 * @param {() => void} props.handleReset - Function to reset the values.
 * 
 * @returns {JSX.Element} The Displaytotal component.
 */

const Displaytotal: React.FC<DisplaytotalProps> = ({ tipPerPerson, totalPerPerson, handleReset }) => {
  console.log("in diplay ",tipPerPerson,totalPerPerson)
  return (
    <div className={styles.container}>
      <div className={styles.spacer1}></div>
      <Totalitem label="Tip Amount" tipPerPerson={tipPerPerson} />
         <div className={styles.spacer2}></div>
      <Totalitem label="Total" totalPerPerson={totalPerPerson} />
         <div className={styles.spacer3}></div>
      <button id={styles.reset} onClick={handleReset}>RESET</button>
    </div>
  );
};

export default Displaytotal;
