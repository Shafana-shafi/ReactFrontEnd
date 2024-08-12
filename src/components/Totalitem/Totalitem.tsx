import React from 'react';
import styles from './Totalitem.module.css';
import "../../App.css";

interface TotalitemProps {
  label: string;
  tipPerPerson?: string | number;
  totalPerPerson?: string | number;
}

const Totalitem: React.FC<TotalitemProps> = ({ label, tipPerPerson, totalPerPerson }) => {
  console.log("in item", totalPerPerson,tipPerPerson)
  return (
    <div className={styles.container}>
      <div id={styles.label}>
        {label}
        <div style={{ color: '#9FB3B2' }}> / person</div>
      </div>
      <div id={styles.value}>
        {typeof tipPerPerson === 'number' 
          ? `$${tipPerPerson.toFixed(2)}` 
          : (typeof totalPerPerson === 'number' ? `$${totalPerPerson.toFixed(2)}` : "--")}
      </div>
    </div>
  );
};

export default Totalitem;
