import "./Index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Total from "./accounts/TotalMoney";
import Wallet from "./accounts/Wallet";
import Gcash from "./accounts/Gcash";
import Bank from "./accounts/Bank";
import { useState } from "react";

import { IonList, IonSelect, IonSelectOption } from "@ionic/react";

interface ContainerProps {}

const Index: React.FC<ContainerProps> = () => {
  const customActionSheetOptions = {
    header: "Select to switch account",
    translucent: true,
    cssClass: "my-custom-interface",
  };
  const [account, setAccount] = useState("total");

  return (
    <div className="container">
      <IonList className="fs-2">
          <IonSelect
          interface="action-sheet"
          interfaceOptions={customActionSheetOptions}
          onIonChange={(e)=> setAccount(e.detail.value)}
          value={account}>
            <IonSelectOption value="total">Total</IonSelectOption>
            <IonSelectOption value="wallet">Wallet</IonSelectOption>
            <IonSelectOption value="gcash">Gcash</IonSelectOption>
            <IonSelectOption value="bank">Bank</IonSelectOption>
          </IonSelect>
        </IonList>
      {account === "total" ? (<Wallet />) : account === "wallet" ? (<Total />) : account === "gcash" ? (<Gcash />) : (<Bank />)}
    </div>
      
  );
};

export default Index;
