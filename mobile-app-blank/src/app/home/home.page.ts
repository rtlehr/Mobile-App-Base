import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent  } from '@ionic/angular/standalone';

import { IonIcon } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { logoIonic } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonIcon],
})
export class HomePage {
  constructor() {
    addIcons({ logoIonic });
  }
}
