import {
  IonButtons,
  IonContent,
  IonMenuButton,
  IonPage,
  IonSplitPane,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import Menu from '../components/Menu';
import Auction from '../components/Auction';
import { useEffect } from 'react';


const Home: React.FC = () => {
  // useEffect(() => {
  //   const checkAuth = async () => {
  //     alert('ok');
  //   };

  //   checkAuth();
  // }, []);


  return (
    <IonSplitPane when="xl" contentId="main">
      {/* Menu and all Links */}
      <Menu></Menu>
      <div className="ion-page" id="main">
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Main Page</IonTitle>
        </IonToolbar>
        <IonContent className="ion-padding">
          <Auction></Auction>
        </IonContent>
      </div>
    </IonSplitPane>


  );
};

export default Home;
