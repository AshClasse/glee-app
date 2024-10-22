import React, { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {
  home,
  homeOutline,
  accessibility,
  accessibilityOutline,
  informationCircle,
  informationCircleOutline,
  images,
  imageOutline,
  heartHalf,
  heartHalfOutline,
  call,
  callOutline,
} from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
// import Tab4 from './pages/Tab4';
// import Tab5 from './pages/Tab5';
// import Tab6 from './pages/Tab6';

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
import './theme/floating-tab-bar.css';
import './theme/custom-fonts.css';

interface Tab {
  name: string;
  url: string;
  activeIcon: string;
  icon: string;
  component: React.FC;
}

const App: React.FC = () => {
  const tabs: Tab[] = [
    {
      name: "Inicio",
      url: "/inicio",
      activeIcon: home,
      icon: homeOutline,
      component: Tab1
    },
    {
      name: "Personajes",
      url: "/personajes",
      activeIcon: accessibility,
      icon: accessibilityOutline,
      component: Tab2
    },
    {
      name: "Momentos",
      url: "/momentos",
      activeIcon: images,
      icon: imageOutline,
      component: Tab3
    }
    // {
    //   name: "Acerca de",
    //   url: "/acerca",
    //   activeIcon: informationCircle,
    //   icon: informationCircleOutline,
    //   component: Tab4
    // },
    // {
    //   name: "En mi vida",
    //   url: "/enmivida",
    //   activeIcon: heartHalf,
    //   icon: heartHalfOutline,
    //   component: Tab5
    // },
    // {
    //   name: "Contratame",
    //   url: "/contratame",
    //   activeIcon: call,
    //   icon: callOutline,
    //   component: Tab6
    // }
  ];

  const [activeTab, setActiveTab] = useState<string>(tabs[0].name);

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs onIonTabsDidChange={(e) => setActiveTab(e.detail.tab)}>
          <IonRouterOutlet>
            {tabs.map((tab, index) => (
              <Route key={index} exact path={tab.url}>
                <tab.component />
              </Route>
            ))}
            <Route exact path="/">
              <Redirect to="/inicio" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            {tabs.map((tab, barIndex) => {
              const active = tab.name === activeTab;

              return (
                <IonTabButton key={`tab_${barIndex}`} tab={tab.name} href={tab.url}>
                  <IonIcon icon={active ? tab.activeIcon : tab.icon} />
                </IonTabButton>
              );
            })}
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
