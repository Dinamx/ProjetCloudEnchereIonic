import {
  IonButtons,
  IonContent,
  IonMenuButton,
  IonPage,
  IonSplitPane,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import Push from '@capacitor/core';
// import Push from 'push.js';
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

  const testPush = async () => {
    try {
      console.log('bonjour');
      // Push.create("Hello World");
      // Push.clear();
    } catch (error) {
      alert(error);
      console.error(error);
    }
  };


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
          <IonButtons onClick={testPush}>
            Bonjour
          </IonButtons>
          <Auction></Auction>

        </IonContent>
      </div>
    </IonSplitPane>


  );
};

export default Home;
