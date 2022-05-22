import {
  IonContent,
  // IonHeader,
  IonPage,
  // IonTitle,
  // IonToolbar,
} from "@ionic/react";
import Index from "../components/Index";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      {/* <IonHeader>
        <IonToolbar>
          <IonTitle>Manager</IonTitle>
        </IonToolbar>
      </IonHeader> */}
      <IonContent fullscreen>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader> */}
        <Index />
      </IonContent>
    </IonPage>
  );
};

export default Home;
