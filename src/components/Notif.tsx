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
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { baseUrl } from '../data/webService';



// Any na dia tokony hi definissena interface aza lery

const Notif: React.FC = () => {
    const history = useHistory();
    const handleClick = async (id: string) => {
        // code à exécuter lorsqu'on clique sur la notification
        console.log('Notification ID: ', id);
        const response = await axios.get(url + '/notifications/update/' + id);
        window.location.reload();

    };

    const url = baseUrl();

    const iduser = localStorage.getItem('iduser');

    const [notifications, setNotification] = useState<Array<any>>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {

                const response = await axios.get(url + '/notifications/' + iduser);
                setNotification(response.data);
                console.log(response.data);
            } catch (error) {
                alert(error);
                console.error(error);
            }
        };

        fetchData();
    }, []);



    const date = new Date().toLocaleDateString();
    return (


        <IonGrid fixed >
            {notifications.map(result => {
                return (
                    // Asina ny tena gestion ana couleur kely mba micharme e
                    <IonRow style={{ backgroundColor: result.lu === true ? 'white' : 'lightgrey', padding: "1em", borderRadius: "5px" }} onClick={() => handleClick(result.id)}>
                        <IonCol size="12" size-md="6" style={{ cursor: "pointer" }}>
                            <span>
                                Fin de la vente de : {result.idenchere.description}
                            </span>
                        </IonCol>
                        <IonCol size="12" style={{ textAlign: "right" }}>
                            <span style={{ fontSize: "0.8em" }}>
                                notification recue le {new Date(result.datenotif).toLocaleDateString()} à {new Date(result.datenotif).toLocaleTimeString()}
                            </span>
                        </IonCol>
                    </IonRow>
                )
            })}

        </IonGrid>
    );
};


export default Notif;
