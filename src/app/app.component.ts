import { Component } from '@angular/core';
import {Etudiant} from "./Model/Etudiant";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Oumayma chabaa';
  titlee = 'Angular chabaa 8';
  etd: Etudiant  = new Etudiant(12,"ouma","ISI");
  tab: number[] = [2, 3, 5, 8];
  tabb: number[] =[2, 3, 5, 8, 10 ,12, 19, 20, 14, 16, 17, 9];
  constructor() {
  }
  direBonjour() {
    return "bonjour Angular";
  }

  getBackgroundColor() {
    return"green";
  }
  getColor() {
    return "white";
  }




}
