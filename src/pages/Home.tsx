import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
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
    dispatch,
  } = useStore();
  const sendMsg = () => {
    window.open(`https://api.whatsapp.com/send?phone=91${number}&text=${msg}`);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color='success'>
          <IonTitle>WhatsApp stranger</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent style={{ background: 'red' }}>
        <ThemeProvider theme={theme}>
          <IonGrid>
            <IonRow>
              <IonCol sizeMd='6' offsetMd='3'>
                <IonCard>
                  <IonCardContent className='ion-padding'>
                    <div className='ion-margin-top'></div>
                    <TextField
                      type='number'
                      value={phoneNumber}
                      variant='outlined'
                      placeholder='Enter Number'
                      onChange={(e) => {
                        const value = e.target.value;
                        number!.length <= 10 &&
                          dispatch({ type: Actions.setPhoneNumber, payload: value });
                      }}
                      fullWidth
                    />
                    <div className='ion-margin-top'></div>
                    <TextField
                      variant='outlined'
                      placeholder='Message...'
                      onChange={(e) => {
                        const value = e.target.value;
                        dispatch({ type: Actions.setMessage, payload: value });
                      }}
                      fullWidth
                    />
                    <div className='ion-text-end ion-padding-top'>
                      <Button variant='outlined' color='primary' size='large' onClick={sendMsg}>
                        Send
                      </Button>
                    </div>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        </ThemeProvider>
      </IonContent>
    </IonPage>
  );
};

export default Home;
