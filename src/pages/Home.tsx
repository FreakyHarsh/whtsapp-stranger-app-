import {
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import './Home.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { useStore } from '../store/store';
import { State } from '../types/state';
import { Actions } from '../types/actions';
import Card from '../components/Card';

const Home: React.FC = () => {
  const [number, setNumber] = useState<string | null>(null);
  const [msg, setMsg] = useState<string | null>(null);

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#2DD36F',
      },
    },
  });
  const {
    state: { phoneNumber, message },
  } = useStore();
  const sendMsg = () => {
    window.open(`https://api.whatsapp.com/send?phone=91${phoneNumber}&text=${message}`);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color='success'>
          <IonTitle className='ion-text-center'>WhatsApp stranger</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent style={{ background: 'red' }}>
        <ThemeProvider theme={theme}>
          <IonGrid style={{ marginTop: '1rem' }}>
            <IonRow>
              <IonCol sizeMd='6' offsetMd='3'>
                <Card clicked={sendMsg} />
              </IonCol>
            </IonRow>
          </IonGrid>
        </ThemeProvider>
      </IonContent>
    </IonPage>
  );
};

export default Home;
