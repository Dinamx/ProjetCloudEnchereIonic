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
                {detailAuction.map(result => {
                    return (
                        <IonCard key={result.idenchere} style={{ marginBottom: "20px" }}>
                            <IonCardHeader>
                                <IonItem button detail={false} lines="none" className="speaker-item" >
                                    {/* <IonAvatar slot="start" style={{ width: "50px", height: "50px" }}>
                                            <img src={result.photo} alt="Speaker profile pic" />
                                        </IonAvatar> */}

                                    <IonAvatar slot="start" style={{ maxWidth: "100%", height: "auto" }}>
                                        <img src={result.photo} alt="Speaker profile pic" />
                                    </IonAvatar>
                                    <IonLabel>
                                        <h2 style={{ fontWeight: "bold" }}>{result.nomproduit}</h2>
                                        <p style={{ fontSize: "14px" }}>{result.prixminimumvente}</p>
                                    </IonLabel>
                                </IonItem>
                            </IonCardHeader>
                            <IonCardContent>
                                <IonItem detail={false} >
                                    <IonLabel>
                                        <h6 style={{ marginRight: "right", fontSize: "14px" }}>
                                            <Countdown date={result.datefin} />
                                        </h6>
                                    </IonLabel>
                                    <IonButton onClick={() => { history.push('/auctionDetail/' + result.idenchere) }} style={{ marginLeft: "auto" }}>SeeMore</IonButton>
                                </IonItem>
                            </IonCardContent>
                        </IonCard>
                    )
                })}

            </IonRow>
        </IonGrid>
    );
};

export default Auction;


