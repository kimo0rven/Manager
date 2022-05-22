import { IonContent, IonSegmentButton, IonSegment } from "@ionic/react";

import ExpensesTransactions from "../tabs/transaction/ExpensesTransactions";
import IncomeTransactions from "../tabs/transaction/IncomeTransactions";

import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

interface ContainerProps {}

const AddIncome: React.FC<ContainerProps> = () => {
  const [tab, setTab] = useState("expenses");
  return (
    <IonContent>
      <IonSegment value={tab} className="text-uppercase mt-4">
        <IonSegmentButton value="expenses" onClick={() => setTab("expenses")}>
          Expenses
        </IonSegmentButton>
        <IonSegmentButton value="income" onClick={() => setTab("income")}>
          Income
        </IonSegmentButton>
      </IonSegment>
      <div>
        {tab === "expenses" ? <ExpensesTransactions /> : <IncomeTransactions />}
      </div>
    </IonContent>
  );
};

export default AddIncome;
