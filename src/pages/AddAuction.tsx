import React, { useRef, useState } from 'react';
import { IonContent, IonInput, IonItem, IonLabel, IonButton, IonButtons, IonMenuButton, IonSplitPane, IonTitle, IonToolbar, IonRow } from '@ionic/react';
import Menu from '../components/Menu';
import { baseUrl } from '../data/webService';
import axios from 'axios';

const AddAuction: React.FC = () => {

    const fileInput = useRef(null);
    const onFileChange = (event: any) => {
        console.log('onfileChange');
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            console.log("photo en base 64");
            console.log(e.target?.result);
            if (typeof e.target?.result === 'string') {
                // Mettez à jour la valeur de imageBase64 dans l'état de votre composant avec le résultat de la conversion
                // setImageBase64(e.target.result);
                console.log('ok');
                console.log(e.target.result);
                setPhoto(e.target.result);

            }
        };

        reader.readAsDataURL(file);

    };

    const [price, setPrice] = useState(0.0);
    const [auctionDescription, setAuctionDescription] = useState("");
    const [userId, setUserId] = useState(2);
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [duration, setDuration] = useState({ hours: 0, minutes: 0 });
    const [productDescription, setProductDescription] = useState("");
    const [categoryId, setCategoryId] = useState(1);
    const [photo, setPhoto] = useState('base64BLabla');
    const [image, setImage] = useState('');
    const [productName, setProductName] = useState("");
    const [auctionDate, setAuctionDate] = useState("2023-01-20T06:10:58.453+00:00");

    const url = baseUrl();
    const handleSubmit = async () => {
        try {
            // const history = useHistory();
            const idutilisateur = localStorage.getItem('iduser');


            const durationInMinutes = duration.hours * 60 + duration.minutes;
            const data = {
                "prixminimumvente": price,
                "descriptionenchere": auctionDescription,
                "idutilisateur": userId,
                "nom": name,
                "prenom": surname,
                "duree": durationInMinutes,
                "description": productDescription,
                "idcategorieproduit": categoryId,
                "photo": photo,
                "nomproduit": productName,
                "dateheureenchere": auctionDate
            };

            const response = await axios.post(url + '/encheres', data);
            // history.push('resultats');
            alert('insertion faite');
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    return (
        <IonSplitPane when="xl" contentId="main">
            {/* Menu and all Links */}
            <Menu></Menu>

            {/* // iduser, nomproduit, description, photo, idcategorieproduit, description encjere, prixminimumvente, duree */}

            <div className="ion-page" id="main">
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Ajouter une enchere</IonTitle>
                </IonToolbar>
                <IonContent className="ion-padding">

                    <IonContent>
                        <IonItem>
                            <IonLabel position="floating">Prix minimum de vente</IonLabel>
                            <IonRow>
                                <IonInput type="number" value={price} onIonChange={e => setPrice(parseFloat(e.detail.value!))} />
                                <IonLabel position="floating">Ar</IonLabel>
                            </IonRow>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">Description de l'enchère</IonLabel>
                            <IonInput value={auctionDescription} onIonChange={e => setAuctionDescription(e.detail.value!)} />
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">Nom du produit</IonLabel>
                            <IonInput value={name} onIonChange={e => setName(e.detail.value!)} />
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">Durée</IonLabel>
                            <IonRow>
                                <IonLabel position="floating">Heure</IonLabel>
                                <IonInput type="number" placeholder="Heures" min={0} value={duration.hours} onIonChange={e => setDuration({ ...duration, hours: parseInt(e.detail.value!, 10) })} />
                                <IonLabel position="floating">Minutes</IonLabel>
                                <IonInput type="number" placeholder="Minutes" min={0} value={duration.minutes} onIonChange={e => setDuration({ ...duration, minutes: parseInt(e.detail.value!, 10) })} />
                            </IonRow>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="fixed">Description du produit</IonLabel>
                            <IonInput type="text" value={productDescription} onIonChange={e => setProductDescription(e.detail.value!)} />
                        </IonItem>
                        <IonItem>
                            <IonLabel position="fixed">ID catégorie produit</IonLabel>
                            <IonInput type="number" value={categoryId} onIonChange={e => setCategoryId(parseInt(e.detail.value!, 10))} />
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">telecharger une photo</IonLabel>
                            <>
                                <input
                                    ref={fileInput}
                                    hidden
                                    type="file"
                                    accept="image/*"
                                    onChange={onFileChange}
                                    onClick={() => {
                                    }}
                                />
                                <IonInput
                                    color="primary"
                                    onClick={() => {
                                        // @ts-ignore
                                        fileInput?.current?.click();
                                        // setBackgroundOption(BackgroundOptionType.Gradient);
                                    }}>
                                </IonInput>
                            </>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">Nom du produit</IonLabel>
                            <IonInput value={productName} onIonChange={e => setProductName(e.detail.value!)} />
                        </IonItem>
                        <IonButton onClick={handleSubmit}>Valider</IonButton>
                    </IonContent>
                </IonContent>
            </div>
        </IonSplitPane>
    );
};

export default AddAuction;
