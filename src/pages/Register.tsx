import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonButton, IonBackButton } from '@ionic/react';
import React from 'react'

export default function Register() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButton slot='start'><IonBackButton/></IonButton>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <p className="flex w-full justify-center">THIS IS REGISTER PAGE</p>
      </IonContent>
    </IonPage>
  )
}
