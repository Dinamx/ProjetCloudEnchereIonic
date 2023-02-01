import {
    IonButtons,
    IonContent,
    IonItem,
    IonLabel,
    IonList,
    IonMenuButton,
    IonSplitPane,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import Menu from '../components/Menu';
import Notif from '../components/Notif';


const Notifications: React.FC = () => {
    // console.log(match.params.idAuction);
    return (

        <IonSplitPane when="xl" contentId="main">
            {/* Menu and all Links */}
            <Menu></Menu>
            <div className="ion-page" id="main">
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Mes notifications</IonTitle>
                </IonToolbar>
                <IonContent className="ion-padding">
                    <IonList>
                        <IonItem>
                            <Notif></Notif>
                        </IonItem>
                    </IonList>
                </IonContent>
            </div>
        </IonSplitPane>
    )
};

export default Notifications;
