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
import { useHistory } from 'react-router';
import Countdown from 'react-countdown-now';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../data/webService';

interface detailsenchere {
    datefin: Date,
    dateheureenchere: Date,
    description: string,
    descriptionenchere: string,
    duree: string,
    idcategorieproduit: string,
    idenchere: string
    idutilisateur: string
    nom: string
    nomproduit: string
    photo: string
    prenom: string
    prixminimumvente: string
}


const Auction: React.FC = () => {

    const [detailAuction, setDetailAuction] = useState<Array<detailsenchere>>([]);
    const history = useHistory();

    const url = baseUrl();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url + '/encheres/' + 2);
                setDetailAuction(response.data);
                console.log(response.data);
            } catch (error) {
                alert(error);
                console.error(error);
            }
        };

        fetchData();
    }, []);
    return (

        <IonGrid fixed>
            <IonRow>
                <IonCol size="12" size-md="6" >
                    {detailAuction.map(result => {
                        return (
                            <IonCard key={result.idenchere} className="speaker-card">
                                <IonCardHeader>
                                    <IonItem button detail={false} lines="none" className="speaker-item" >
                                        <IonAvatar slot="start">
                                            <img src={result.photo} alt="Speaker profile pic" />
                                        </IonAvatar>
                                        <IonLabel>
                                            <h2>{result.nomproduit}</h2>
                                            <p>{result.prixminimumvente}</p>
                                        </IonLabel>
                                    </IonItem>
                                </IonCardHeader>
                                <IonCardContent>
                                    <IonItem detail={false} >
                                        <IonLabel>
                                            <h6 style={{ marginRight: "right" }}>
                                                {/* <Countdown date={new Date("YYYY-MM-DDTHH:mm:ss")} /> */}
                                                <Countdown date={result.datefin} />
                                            </h6>
                                        </IonLabel>
                                        <IonLabel>

                                        </IonLabel>

                                        {/* <IonLabel> */}
                                        <IonButton onClick={() => { history.push('/auctionDetail/' + result.idenchere) }}>SeeMore</IonButton>
                                        {/* <h3>About Blabla</h3> */}
                                        {/* </IonLabel> */}
                                    </IonItem>
                                </IonCardContent>
                            </IonCard>
                        )
                    })}
                </IonCol>
            </IonRow>
        </IonGrid>
    );
};

export default Auction;


