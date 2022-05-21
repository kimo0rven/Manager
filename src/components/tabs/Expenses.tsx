import './Expenses.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { AiOutlinePlus } from "react-icons/ai";
import { IonLabel, IonSegment, IonSegmentButton } from '@ionic/react';
import { useState } from "react";

import Daily from '../calc/Day'
import Weekly from '../calc/Week'
import Monthly from '../calc/Month'
import Yearly from '../calc/Year'
import Periodly from '../calc/Period'

interface ContainerProps { }

const Expenses: React.FC<ContainerProps> = () => {
  const [calc, setCalc] = useState('week')
  return (
    <>
    <IonSegment value={calc} scrollable selectOnFocus color='tertiary'>
        <IonSegmentButton value='day' onClick={() => setCalc("day")}>
          <IonLabel>Day</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value='week' onClick={() => setCalc("week")}>
          <IonLabel>Week</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value='month' onClick={() => setCalc("month")}>
          <IonLabel>Month</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value='year' onClick={() => setCalc("year")}>
          <IonLabel>Year</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value='period' onClick={() => setCalc("period")}>
          <IonLabel>Period</IonLabel>
        </IonSegmentButton>
      </IonSegment>
      {calc === "day" ? (<Daily/>) : calc === "week" ? (<Weekly />) : calc === "month" ? (<Monthly />) : calc==="year" ? (<Yearly />) : <Periodly />}
    </>
  );
};  

export default Expenses;
