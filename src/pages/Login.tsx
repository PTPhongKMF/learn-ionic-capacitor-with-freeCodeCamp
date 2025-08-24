import { IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import React, { FormEvent, useState } from 'react';
import IntroSwipe from '../components/IntroSwipe';

function Login() {
  const [showIntro, setShowIntro] = useState(true);

  const router = useIonRouter();

  function handleLogin(e: FormEvent) {
    e.preventDefault();
    console.log("Logging in!");
    router.push("/tabpage", "forward");
  }

  return (
    <>
      {showIntro ? (
        <IntroSwipe setShowIntro={setShowIntro} />
      ) : (
        <IonPage>
          <IonHeader>
            <IonToolbar color={'success'}>
              <IonTitle className="ps-4">Login</IonTitle >
            </IonToolbar >
          </IonHeader >

          <IonContent>
            <IonCard className='h-fit w-full'>
              <IonCardContent>
                <form className='flex flex-col gap-8' onSubmit={handleLogin}>
                  <IonInput label='Email' type='email' />
                  <IonInput label='Password' type='password' />

                  <IonButton className="w-full" type='submit'>Login</IonButton>
                  <IonButton className="w-full" routerLink='/register'>Create account</IonButton>
                </form>
              </IonCardContent>
            </IonCard>
          </IonContent>
        </IonPage >
      )}
    </>
  );
};

export default Login;
