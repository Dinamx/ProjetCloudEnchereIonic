import {
    IonAvatar,
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCol,
    IonGrid,
    IonItem,
    IonLabel,
    IonList,
    IonRow,
    IonText,
} from '@ionic/react';
import { useHistory } from 'react-router';


const Notif: React.FC = () => {
    const history = useHistory();
    const handleClick = () => {
        // code à exécuter lorsqu'on clique sur la notification
    };
    const date = new Date().toLocaleDateString();
    return (


        <IonGrid fixed style={{ backgroundColor: "lightgrey", padding: "1em", borderRadius: "5px" }} onClick={handleClick}>
            <IonRow>
                <IonCol size="12" size-md="6" style={{ cursor: "pointer" }}>
                    <span>
                        Cliquez ici pour voir la notification
                    </span>
                </IonCol>
                <IonCol size="12" style={{ textAlign: "right" }}>
                    <span style={{ fontSize: "0.8em" }}>
                        {date}
                    </span>
                </IonCol>
            </IonRow>
        </IonGrid>
    );
};


export default Notif;
