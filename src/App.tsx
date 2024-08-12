import React, { startTransition, useReducer } from 'react';
import './App.css';
import Displaytotal from './components/Displaytotal/Displaytotal';
import { Selecttip } from './components/Selecttip/Selecttip';
import { InputComponent } from './components/InputComponent/InputComponent';

const initialState = {
  bill:"",
  numberOfPeople: "",
  tip: "",
};

function reducer(state, action) {
  switch (action.type) {
    case 'setBillAmount':
      return {
        ...state,
        bill: action.value,
      };
    case 'setNumberOfPeople':
      return {
        ...state,
        numberOfPeople: action.value,
      };
    case 'setTip':
      return {
        ...state,
        tip: action.value,
      };
    case 'Reset':
      return initialState;
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleTipChange = (newTip) => {
    dispatch({ type: 'setTip', value: newTip });
     if (newTip > 100) {
     dispatch({ type: 'setTip', value: 100 });
  } else {
    dispatch({ type: 'setTip', value: newTip });
  }
  };

  const handleReset = () => {
    
    dispatch({ type: 'Reset' });
  };

const handleBillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  dispatch({ type: 'setBillAmount', value: event.target.value });
  console.log(state.bill,"bill")
};







const handleNumberOfPeopleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const numberValue = parseInt(value, 10);

    if (value === "" || (Number.isInteger(numberValue) && numberValue >= 0)) {
        dispatch({ type: 'setNumberOfPeople', value: numberValue });
    } else {
        // Revert the input field value to the last valid state if decimals or invalid numbers are typed
        event.target.value = state.numberOfPeople.toString();
        console.log("Invalid input, reverted to:", state.numberOfPeople);
    }
};



  
  
 const tipPerPerson = state.bill && state.numberOfPeople && state.tip
  ? (Number(state.bill) * Number(state.tip) / 100) / Number(state.numberOfPeople)
  : "--"; // Set to 0 if tip is not provided
  let totalPerPerson;
  // Calculate totalPerPerson if bill and numberOfPeople are set
  if (typeof tipPerPerson == "number") {
     totalPerPerson = state.bill && state.numberOfPeople
      ? (Number(state.bill) / Number(state.numberOfPeople)) + Number(tipPerPerson)
      : "--";
  }
  else {
     totalPerPerson = state.bill && state.numberOfPeople
      ? (Number(state.bill) / Number(state.numberOfPeople))
      : "--";
  }
  console.log(totalPerPerson,"totalPersperson")
   
 

  console.log(tipPerPerson,totalPerPerson,"in app")
  
  return (
    <div className='outerContainer'>
      <div className='title'>
        <span className='first-part'>SPLI</span><br/>
        <span className='second-part'>TTER</span>
      </div>

      <div className='container'>
        <div className='cc1'>
          <InputComponent
            value={state.bill}
            label="Bill"
            typeOfIcon="dollar"
            onChange={handleBillChange}
          />
          <Selecttip
            label="Select Tip %"
            onClick={handleTipChange}
            tip={state.tip}
          />
          <InputComponent
            value={state.numberOfPeople}
            label="Number Of People"
            typeOfIcon="person"
            onChange={handleNumberOfPeopleChange}
          />
        </div>
        <div className='cc2'>
          <Displaytotal 
            // billAmount={state.bill} 
            // numberOfPeople={state.numberOfPeople} 
            tipPerPerson={tipPerPerson} 
            totalPerPerson={totalPerPerson}
            handleReset={handleReset}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
