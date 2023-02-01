import React, { useState } from 'react';
import { IonContent, IonInput, IonItem, IonLabel, IonButton, IonButtons, IonMenuButton, IonSplitPane, IonTitle, IonToolbar, IonRow } from '@ionic/react';
import Menu from '../components/Menu';
import AuctionDone from '../components/AuctionDone';

const AddAuction: React.FC = () => {
    const [price, setPrice] = useState(0.0);
    const [auctionDescription, setAuctionDescription] = useState("");
    const [userId, setUserId] = useState(2);
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [duration, setDuration] = useState({ hours: 0, minutes: 0 });
    const [productDescription, setProductDescription] = useState("");
    const [categoryId, setCategoryId] = useState(1);
    const [photo, setPhoto] = useState("");
    const [productName, setProductName] = useState("");
    const [auctionDate, setAuctionDate] = useState("2023-01-20T06:10:58.453+00:00");
    const handleSubmit = () => {
        // Prendre l'id user

        // Convert duration to minutes
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
        console.log(data);
        // Code to handle form submission here
    }

    return (
        <IonSplitPane when="xl" contentId="main">
            {/* Menu and all Links */}
            <Menu></Menu>


            <div className="ion-page" id="main">
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Mes participations</IonTitle>
                </IonToolbar>
                <IonContent className="ion-padding">
                    <h3>Mes participations</h3>
                    <AuctionDone></AuctionDone>
                </IonContent>
            </div>
        </IonSplitPane>
    );
};

export default AddAuction;


