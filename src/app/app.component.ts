import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  boolBoard1: boolean = true;
  boolBoard2: boolean = false;
  boolBoard3: boolean = false;
  boolBoard4: boolean = false;
  run: boolean = false;
  nbrJoueur: number = 1;
  difficulte: number = 5;
  nbrJoueurValid: number = 2;
  difficulteValid: number = 5;
  title = "Hacker's Battle";
  commencer() {
    this.nbrJoueurValid = this.nbrJoueur;
    this.difficulteValid = this.difficulte;
    this.run = true;
    console.log(this.nbrJoueurValid, this.difficulteValid);
  }
  enableBoard1() {
    if (this.nbrJoueurValid == 4) {
      this.boolBoard1 = false;
      this.boolBoard2 = true;
      this.boolBoard3 = false;
      this.boolBoard4 = false;
    }
    if (this.nbrJoueurValid == 2) {
      this.boolBoard1 = false;
      this.boolBoard2 = true;
    }
  }
  enableBoard2() {
    if (this.nbrJoueurValid == 4) {
      this.boolBoard3 = true;
      this.boolBoard1 = false;
      this.boolBoard2 = false;
      this.boolBoard4 = false;
    }
    if (this.nbrJoueurValid == 2) {
      this.boolBoard2 = false;
      this.boolBoard1 = true;
    }
  }
  enableBoard3() {
    this.boolBoard4 = true;
    this.boolBoard3 = false;
    this.boolBoard1 = false;
    this.boolBoard2 = false;

    console.log("enable board 2");
  }
  enableBoard4() {
    this.boolBoard4 = false;
    this.boolBoard1 = true;
    this.boolBoard3 = false;
    this.boolBoard2 = false;
  }
}
