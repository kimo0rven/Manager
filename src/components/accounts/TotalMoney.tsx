import "../tabs/Expenses.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { IonLabel, IonSegmentButton, IonSegment } from "@ionic/react";
import Expenses from "../tabs/Expenses";
import Income from "../tabs/Income";

import { useState } from "react";

interface ContainerProps {}

const Gcash: React.FC<ContainerProps> = () => {
  const [tab, setTab] = useState("expenses");

  return (
    <>
      <p className="text-center fs-1 my-0">₱300</p>
      <div className="d-flex justify-content-around">
        <IonSegment value={tab} color="tertiary">
          <IonSegmentButton value="expenses" onClick={() => setTab("expenses")}>
            <IonLabel className="text-uppercase">Expenses</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="income" onClick={() => setTab("income")}>
            <IonLabel className="text-uppercase">Income</IonLabel>
          </IonSegmentButton>
        </IonSegment>
      </div>
      <div className="card-design m-3">
        {tab === "expenses" ? <Expenses /> : <Income />}
      </div>
    </>
  );
};

export default Gcash;
