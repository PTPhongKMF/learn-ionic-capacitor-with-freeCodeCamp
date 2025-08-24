import { IonContent, IonHeader, IonPage, IonTab, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import Tab1 from './Tab1';
import Tab2 from './Tab2';

function TabPage() {

  return (
    <IonTabs>
      <IonTab tab='tab1'><Tab1 /></IonTab>
      <IonTab tab='tab2'><Tab2 /></IonTab>

      <IonTabBar slot='bottom'>
        <IonTabButton tab='tab1' href="/tab1">Tab 1</IonTabButton>
        <IonTabButton tab='tab2' href="/tab2">Tab 2</IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default TabPage;