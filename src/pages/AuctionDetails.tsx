import { useEffect, useState } from 'react';
import { Message } from '../data/messages';
import {
    IonBackButton,
    IonButtons,
    IonCol,
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenuButton,
    IonPage,
    IonRow,
    IonSplitPane,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import Menu from '../components/Menu';
import { RouteComponentProps } from 'react-router-dom';
import { baseUrl } from '../data/webService';
import axios from 'axios';

interface detailSurenchere {
    id: String,
    idenchere: String,
    idutilisateur: String,
    montantOffre: String,
    dateheuremise: Date
}

interface IdAuction
    extends RouteComponentProps<{
        idAuction: string;
    }> { }

const AuctionDetail: React.FC<IdAuction> = ({ match }) => {
    // Find The Auction Details

    const url = baseUrl();
    const [detailsSurenchere, setDetailsSurenchere] = useState<Array<detailSurenchere>>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url + '/surenchere/' + match.params.idAuction);
                setDetailsSurenchere(response.data);
                console.log(response.data);

            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);
    // Find all person who participated to the Auction
    console.log(match.params.idAuction);
    // alert(match.params.idAuction);

    const formatDate = (dateStr: string) => {
        const date = new Date(Date.parse(dateStr));
        return date.toLocaleString();
    };
    return (
        <IonPage id="main" >
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        <img src="path/to/header/photo.jpg" alt="Header Photo" />
                    </IonTitle>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/home" />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonHeader>
                    Liste des surencherisseurs + asina description sexy
                </IonHeader>
                <IonList>
                    {detailsSurenchere.map(result => {
                        return (
                            <IonRow>
                                <IonCol size="12" size-md="6" style={{ cursor: "pointer" }}>
                                    <span>
                                        {result.montantOffre} ariary
                                    </span>
                                </IonCol>
                                <IonCol size="12" style={{ textAlign: "right" }}>
                                    <span style={{ fontSize: "0.8em" }}>
                                        {new Date(result.dateheuremise).toLocaleDateString()}  {new Date(result.dateheuremise).toLocaleTimeString()}
                                    </span>
                                </IonCol>
                            </IonRow>


                        )
                    })}
                    {/* Add more elements as needed */}
                </IonList>

            </IonContent>
        </IonPage>
    )
};

export default AuctionDetail;
