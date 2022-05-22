import "./Income.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { AiOutlinePlus } from "react-icons/ai";
import { IoMdArrowBack } from "react-icons/io";
import {
  IonLabel,
  IonSegment,
  IonSegmentButton,
  IonFab,
  IonModal,
  IonToolbar,
  IonButtons,
  IonTitle,
} from "@ionic/react";
import { useState } from "react";

import Daily from "../calc/Day";
import Weekly from "../calc/Week";
import Monthly from "../calc/Month";
import Yearly from "../calc/Year";
import Periodly from "../calc/Period";
import AddIncome from "../modals/AddIncome";

interface ContainerProps {}

const Income: React.FC<ContainerProps> = () => {
  const [calc, setCalc] = useState("week");
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <IonSegment value={calc} scrollable color="tertiary">
        <IonSegmentButton value="day" onClick={() => setCalc("day")}>
          <IonLabel>Day</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="week" onClick={() => setCalc("week")}>
          <IonLabel>Week</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="month" onClick={() => setCalc("month")}>
          <IonLabel>Month</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="year" onClick={() => setCalc("year")}>
          <IonLabel>Year</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="period" onClick={() => setCalc("period")}>
          <IonLabel>Period</IonLabel>
        </IonSegmentButton>
      </IonSegment>
      {calc === "day" ? (
        <Daily />
      ) : calc === "week" ? (
        <Weekly />
      ) : calc === "month" ? (
        <Monthly />
      ) : calc === "year" ? (
        <Yearly />
      ) : (
        <Periodly />
      )}
      <IonFab vertical="bottom" horizontal="end" slot="fixed">
        <IonModal isOpen={showModal}>
          <IonToolbar>
            <IonButtons
              className="fs-1"
              onClick={() => setShowModal(false)}
              slot="start"
            >
              <IoMdArrowBack />
            </IonButtons>
            <IonTitle>Add Transactions</IonTitle>
          </IonToolbar>
          <AddIncome />
          <IonFab
            className="pb-3"
            vertical="bottom"
            horizontal="center"
            slot="fixed"
          >
            <button
              className="card-design p-3"
              onClick={() => setShowModal(false)}
            >
              Add
            </button>
          </IonFab>
        </IonModal>
        <button
          type="button"
          className="btn btn-primary m-2 card-design fs-2"
          onClick={() => setShowModal(true)}
        >
          <AiOutlinePlus />
        </button>
      </IonFab>
    </>
  );
};

export default Income;
