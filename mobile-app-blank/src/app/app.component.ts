import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonApp,
  IonBackButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
  IonCol, 
  IonGrid, 
  IonRow,
  IonIcon
} from '@ionic/angular/standalone';
import { RouterOutlet } from '@angular/router';

import { addIcons } from 'ionicons';
import { albums, body, calendar, logoIonic, time } from 'ionicons/icons';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    IonApp,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonMenuButton,
    IonTitle,
    IonContent,
    IonFooter,
    IonMenu,
    IonRouterOutlet, 
    IonCol, 
    IonGrid, 
    IonRow,
    IonIcon
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {
    addIcons({ logoIonic, calendar, body, albums, time });
  }
}
