import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonicSlides, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper/modules';
import { personOutline } from 'ionicons/icons';

import 'swiper/css';
import '@ionic/react/css/ionic-swiper.css';
import 'swiper/css/autoplay';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';
import './Tab1.css';


const Tab1: React.FC = () => {
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>bienvenido al glee club🎉</IonTitle>
          <IonButtons slot="end">
            <IonButton href='/contratame'>
              <IonIcon icon={ personOutline } />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true} className='tab1-content'>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">inicio</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <video className='background-video' autoPlay loop muted>
          <source src="/videos/GLEE1.mp4" type="video/mp4" />
        </video>
        <Swiper
          modules={[Autoplay, Keyboard, Pagination]}
          autoplay={true}
          keyboard={true}
          pagination={true}>
        <SwiperSlide>
          <h4>Welcome</h4>
          <p>Let us take care of you for the weekend</p>
        </SwiperSlide>
        <SwiperSlide>
          <h4>Escape</h4>
          <p>Let us take care of you for the weekend</p>
        </SwiperSlide>
        <SwiperSlide>
          <h4>Luxury</h4>
          <p>Let us take care of you for the weekend</p>
        </SwiperSlide>
      </Swiper> */}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
