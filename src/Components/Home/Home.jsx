import React, { useState } from 'react'
import styles from "./Home.module.css"

function Home(props) {

  const Wizard = ({ steps, setToShow }) => {

    const Circle = ({ number, CurrentStep }) => {
      if (number <= CurrentStep) {
        return <div className={styles.activeCircle}>{number}</div>;
      } else {
        return <div className={styles.nonactiveCircle}>{number}</div>;
      }
    };
  
    const [CurrentStep, setCurrentStep] = useState(1);
  
    return (
      <div className={styles.mainContainer}>
        <h3 className={styles.exit} onClick={() => setToShow(false)}>X</h3>
        <h1>Welcome to Wizard</h1>
        <h2>Current step: {CurrentStep}</h2>
        <button
          className={styles.button}
          onClick={() => { if (CurrentStep > 1) setCurrentStep(CurrentStep - 1); }}
        >
          Prev
        </button>
        <button
          className={styles.button}
          onClick={() => { if (CurrentStep < steps) setCurrentStep(CurrentStep + 1); }}
        >
          Next
        </button>
        <div className={styles.circleContainer}>
          {Array.from({ length: steps }).map((_, index) => (
            <Circle key={index + 1} number={index + 1} CurrentStep={CurrentStep} />
          ))}
        </div>
      </div>
    );
  };  

  const [toShow, setToShow] = useState(true);

  return (
    <>
      <h1>Wellcome to home page</h1>
      {toShow && <Wizard steps={5} setToShow={setToShow} />}
    </>
  )
}

export default Home
