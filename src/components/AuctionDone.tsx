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
} from '@ionic/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { baseUrl } from '../data/webService';



const Auction: React.FC = () => {
    const history = useHistory();
    const [listeEnchere, setListeEnchere] = useState<Array<any>>([]);

    const url = baseUrl();

    const iduser = localStorage.getItem('iduser');

    // alert(iduser);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url + '/encheres/' + iduser);
                setListeEnchere(response.data);
                console.log(response.data);

            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <IonGrid fixed>
            <IonRow>
                <IonCol size="12" size-md="6" >
                    <IonCard className="speaker-card">
                        <IonCardHeader>
                            <IonItem button detail={false} lines="none" className="speaker-item" >
                                <IonAvatar slot="start">
                                    <img src="yo.jpg" alt="Speaker profile pic" />
                                </IonAvatar>
                                <IonLabel>
                                    {listeEnchere.map(result => {
                                        return (
                                            <IonItem key={result.id}>
                                                <IonLabel>{result.id}</IonLabel>
                                                <IonLabel>
                                                    <h2>Nom produit</h2>
                                                    <p>Prix de base</p>
                                                </IonLabel>
                                            </IonItem>)
                                    })}

                                </IonLabel>
                            </IonItem>
                        </IonCardHeader>
                        <IonCardContent>
                            <IonList lines="none">
                                <IonItem detail={false} >
                                    <IonLabel>
                                        <h3>Ma surenchere ; </h3>
                                    </IonLabel>
                                </IonItem>
                                {/* <IonItem detail={false} >
                                    <IonButton onClick={() => { history.push('/auctionDetail/1') }}>SeeMore</IonButton>
                                </IonItem> */}
                            </IonList>
                        </IonCardContent>
                    </IonCard>
                </IonCol>
            </IonRow>
        </IonGrid>
    );
};

export default Auction;
