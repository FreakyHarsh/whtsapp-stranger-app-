import React from 'react';

import { Button, TextField } from '@material-ui/core';
import { IonCard, IonCardContent } from '@ionic/react';
import { Actions } from '../types/actions';
import { useStore } from '../store/store';
function Card({ clicked }: { clicked: () => void }) {
  const {
    state: { phoneNumber, message },
    dispatch,
  } = useStore();
  return (
    <IonCard style={{ border: ' 1px solid lightgreen' }}>
      <IonCardContent className='ion-padding'>
        <div className='ion-margin-top'></div>
        <TextField
          type='number'
          value={phoneNumber}
          variant='outlined'
          placeholder='Enter Number'
          onChange={(e) => {
            const value = e.target.value;
            phoneNumber!.length <= 10 && dispatch({ type: Actions.setPhoneNumber, payload: value });
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
          <Button variant='outlined' color='primary' size='large' onClick={clicked}>
            Send
          </Button>
        </div>
      </IonCardContent>
    </IonCard>
  );
}

export default Card;
