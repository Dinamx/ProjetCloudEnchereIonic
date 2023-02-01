import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import AddAuction from './pages/AddAuction';
import AuctionDetail from './pages/AuctionDetails';
import Home from './pages/Home';
import Login from './pages/Login';
import MyAuctions from './pages/MyAuctions';
import Notifications from './pages/Notifications';
import RechargeAccount from './pages/RechargeAccount';
import Signup from './pages/Signup';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet >
          <Route path="/" exact={true}>
            {/* <Redirect to="/login" /> */}
            <Redirect to="/login" />
          </Route>
          {/* Login */}
          <Route path="/login" exact={true}>
            <Login />
          </Route>
          {/* Signup */}
          <Route path="/signup" exact={true}>
            <Signup />
          </Route>
          {/* List of All Auctions */}
          {/* <Route path="/home"  exact={true}>
          <Home />
        </Route> */}
          <Route path="/home" component={Home} />
          {/* List of an auction */}
          <Route path="/auction/:id" exact={true}></Route>
          {/* Add an auction */}
          <Route path="/auction/new" exact={true}>
            <AddAuction />
          </Route>
          {/* Notifications */}
          <Route path="/notifications" exact={true}>
            <Notifications />
          </Route>
          {/* Recharge */}
          <Route path="/rechargeAccount" exact={true}>
            <RechargeAccount />
          </Route>
          {/* Enchers acquelles j'ai participé */}
          <Route path="/auctionDone" exact={true}>
            <MyAuctions />
          </Route>

          {/* Auction Detail */}
          <Route path="/auctionDetail/:idAuction" component={AuctionDetail} exact={true} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
