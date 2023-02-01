import { IonContent, IonIcon, IonItem, IonLabel, IonMenu, IonMenuToggle, IonTitle, IonToolbar } from '@ionic/react';
import { peopleOutline, mapOutline, informationCircleOutline, person, help, logOut, logIn, personAdd, addCircleOutline, albums } from 'ionicons/icons';
import { useLocation } from 'react-router-dom';
// Liste des liens a ajouter sur le menu
const routes = {
    appPages: [
        { title: 'Home', path: '/home', icon: addCircleOutline },
        { title: 'Ajouter une nouvelle enchere', path: '/auction/new', icon: peopleOutline },
        // { title: 'Mes encheres', path: '/auctionDone', icon: albums },
        { title: 'Recharger mon compte', path: '/rechargeAccount', icon: mapOutline },
        { title: 'Notification', path: '/notifications', icon: informationCircleOutline }
    ]
};
// Liste des trucs dans la variable page (Amin'izay mba tode precisena hoe inona ny inona)
interface Pages {
    title: string,
    path: string,
    icon: string,
    routerDirection?: string
}

const Menu: React.FC = () => {
    const location = useLocation();
    function renderlistItems(list: Pages[]) {
        return list
            .map(p => (
                <IonMenuToggle key={p.title} auto-hide="false">
                    <IonItem detail={false} routerLink={p.path} routerDirection="none" className={location.pathname.startsWith(p.path) ? 'selected' : undefined}>
                        <IonIcon slot="start" icon={p.icon} />
                        <IonLabel>{p.title}</IonLabel>
                    </IonItem>
                </IonMenuToggle>
            ));
    }


    return (
        <IonMenu contentId="main" >
            <IonToolbar>
                <IonTitle>Menus</IonTitle>
            </IonToolbar>
            <IonContent className="ion-padding">
                {renderlistItems(routes.appPages)}
            </IonContent>
        </IonMenu>
    );
};

export default Menu;
