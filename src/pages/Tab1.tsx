import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { personOutline } from 'ionicons/icons';
import './Tab1.css';
import { useRef } from 'react';

const Tab1 = () => {

  const pageRef = useRef();

  return (
    <IonPage ref={ pageRef }>
      <IonHeader>
        <IonToolbar>
          <IonTitle>inicio</IonTitle>

          <IonButtons slot="end">
            <IonButton>
              <IonIcon icon={ personOutline } />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='tab-background'>
        <IonGrid className="ion-padding-start ion-padding-end extra-padding ion-padding-bottom ion-margin-bottom">
          <IonRow>
            <IonCol size="12">
              <IonText color="dark">
                <p className="title">Upcoming</p>
              </IonText>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="12">
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="12">
              <IonText color="dark">
                <p className="title">Happening Now</p>
              </IonText>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="12">
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
