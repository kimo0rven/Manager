import "bootstrap/dist/css/bootstrap.min.css";
import {
  IonInput,
  IonItem,
  IonLabel,
  IonItemDivider,
  IonGrid,
  IonCol,
  IonRow,
  IonSegment,
  IonSegmentButton,
} from "@ionic/react";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiOutlinePlus } from "react-icons/ai";
import {
  IoFastFoodOutline,
  IoCarOutline,
  IoCartOutline,
  IoCut,
  IoLogoFacebook,
  IoLogoGoogle,
  IoLogoPython,
  IoLogoJavascript,
} from "react-icons/io5";
import { BsCalendar3 } from "react-icons/bs";
import { useState } from "react";

interface ContainerProps {}

const IncomeTransactions: React.FC<ContainerProps> = () => {
  const [number, setNumber] = useState<number>();
  const [text, setText] = useState<string>();
  return (
    <>
      <div className="px-5 row">
        <IonItem className="px-5 pt-3 text-center">
          <IonInput
            inputmode="decimal"
            type="number"
            value={number}
            placeholder="Enter Number"
            autofocus
            required
            onIonChange={(e) => setNumber(parseInt(e.detail.value!, 10))}
          ></IonInput>
          <IonLabel className="pl-5" color="tertiary">
            PHP
          </IonLabel>
        </IonItem>
      </div>
      <div className="mt-3 mx-3 ">
        Account
        <div className="fs-5" color="primary">
          Wallet
        </div>
      </div>
      <div className="mt-3 mx-3">
        <div>Categories</div>
        <div className="text-center fs-1">
          <div className="mx-3 row text-center fs-1">
            <div className="col mx-1">
              <IoFastFoodOutline className="text-primary" />
              {/* <p className="fs-5">Food</p> */}
            </div>
            <div className="col mx-1">
              <IoCarOutline className="text-warning" />
              {/* <p className="fs-5">Transpo</p> */}
            </div>
            <div className="col mx-1">
              <IoCartOutline className="text-success" />
              {/* <p className="fs-5">Grocery</p> */}
            </div>
            <div className="col mx-1">
              <IoCut className="text-info" />
              {/* <p className="fs-5">Haircut</p> */}
            </div>
          </div>
          <div className="mt-2 mx-3 row">
            <div className="col mx-1">
              <IoLogoFacebook className="text-info" />
              {/* <p className="fs-5">Facebook</p> */}
            </div>
            <div className="col mx-1">
              <IoLogoGoogle className="text-success" />
              {/* <p className="fs-5">Google</p> */}
            </div>
            <div className="col mx-1">
              <IoLogoPython className="text-warning" />
              {/* <p className="fs-5">Python</p> */}
            </div>
            <div className="col mx-1">
              <IoLogoJavascript className="text-primary" />
              {/* <p className="fs-5">Javascript</p> */}
            </div>
          </div>
        </div>
      </div>
      <div className="pr-5">
        <div className="d-flex flex-row mx-3">
          <IonSegment value="today">
            <IonSegmentButton value="today">today</IonSegmentButton>
            <IonSegmentButton value="yesterday">yesterday</IonSegmentButton>
            <IonSegmentButton value="otherDay">two days ago</IonSegmentButton>
          </IonSegment>
          <div className="fs-3 mx-3">
            <BsCalendar3 />
          </div>
        </div>
      </div>
      <div className="mt-3 mx-3">
        <IonItemDivider>Comment</IonItemDivider>
        <IonItem>
          <IonInput
            inputmode="text"
            value={text}
            placeholder="Enter Comment"
            maxlength={4096}
            onIonChange={(e) => setText(e.detail.value!)}
          ></IonInput>
          <IonLabel color="tertiary"></IonLabel>
        </IonItem>
      </div>
      <IonGrid>
        <IonRow className="ion-align-items-start text-center m-3">
          <IonCol className="border py-5 mx-2">
            <AiOutlinePlus />
          </IonCol>
          <IonCol className="border py-5">
            <AiOutlinePlus />
          </IonCol>
          <IonCol className=""></IonCol>
        </IonRow>
      </IonGrid>
    </>
  );
};

export default IncomeTransactions;
