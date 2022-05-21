import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Index from '../components/Index';
import './Home.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const Home: React.FC = () => {
  const customActionSheetOptions = {
    header: "Select to switch account",
    translucent: true,
    cssClass: "my-custom-interface",
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
            <IonTitle>Manager</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* <div className="d-table m-auto circle-background"></div> */}
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Index />
      </IonContent>
    </IonPage>
  );
};

export default Home;
