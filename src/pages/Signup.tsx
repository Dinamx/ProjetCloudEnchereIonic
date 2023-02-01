import MessageListItem from '../components/MessageListItem';
import { useState } from 'react';
import { Message, getMessages } from '../data/messages';
import {
    IonButton,
    IonCol,
    IonContent,
    IonHeader,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonPage,
    IonRefresher,
    IonRefresherContent,
    IonRow,
    IonText,
    IonTitle,
    IonToolbar,
    useIonViewWillEnter
} from '@ionic/react';
import { useHistory } from 'react-router';
import { baseUrl, useSignup } from '../data/webService';
import axios from 'axios';

const Signup: React.FC = () => {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    const url = baseUrl();

    const handleInscription = async (e: React.FormEvent) => {
        try {
            const users =
            {
                "nom": name,
                "prenom": lastName,
                "email": email,
                "mdp": password,
            }
            console.log("ok" + url + '/users/signup');
            await axios.post(url + '/users/signup', users);
            alert('Response');
            history.push('/login', { direction: 'none' });
        } catch (error) {
            alert(error);
            throw error;
        }

    };

    useIonViewWillEnter(() => {
        const msgs = getMessages();
        // setMessages(msgs);
    });

    const refresh = (e: CustomEvent) => {
        setTimeout(() => {
            e.detail.complete();
        }, 3000);
    };

    return (
        <IonPage id="home-page">
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Sign up </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonRefresher slot="fixed" onIonRefresh={refresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>

                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">
                            Sign Up to make your best deals
                        </IonTitle>
                    </IonToolbar>
                </IonHeader>


                {/* <div className="login-logo">
                    <img src="assets/img/appicon.svg" alt="Ionic logo" />
                </div> */}

                {/* <form noValidate onSubmit={handleInscription}> */}
                <IonList>
                    <IonItem>
                        <IonLabel position="stacked" color="primary">Name</IonLabel>
                        <IonInput name="Name" type="text" value={name} spellCheck={false} autocapitalize="off" onIonChange={e => setName(e.detail.value!)}
                            required>
                        </IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked" color="primary">Last Name (Username)</IonLabel>
                        <IonInput name="LastName" type="text" value={lastName} onIonChange={e => setLastName(e.detail.value!)}>
                        </IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked" color="primary">Email</IonLabel>
                        <IonInput name="Email" type="text" value={email} spellCheck={false} autocapitalize="off" onIonChange={e => setEmail(e.detail.value!)}
                            required>
                        </IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked" color="primary">Password</IonLabel>
                        <IonInput name="Password" type="text" value={password} spellCheck={false} autocapitalize="off" onIonChange={e => setPassword(e.detail.value!)}
                            required>
                        </IonInput>
                    </IonItem>
                </IonList>

                <IonRow>
                    <IonCol>
                        <IonButton type="submit" expand="block" onClick={handleInscription}>Signup</IonButton>
                    </IonCol>
                </IonRow>
                {/* </form> */}
                <IonRow>
                    <IonCol>
                        <IonButton routerLink="/login" color="light" expand="block">Login</IonButton>
                    </IonCol>
                </IonRow>
            </IonContent>
        </IonPage>
    );
};

export default Signup;
