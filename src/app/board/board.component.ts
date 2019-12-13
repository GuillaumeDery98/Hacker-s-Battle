import { Component, OnInit, Input } from "@angular/core";
import { AppComponent } from "../app.component";

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.css"]
})
export class BoardComponent implements OnInit {
  @Input() boardID: number;
  boardX: number[];
  boardY: number[][] = [];
  boardPlayed: number[][] = [];
  value: number = 0;
  random: number = 0;
  randomX: number = 0;
  randomY: number = 0;
  door: number = 0;
  @Input() difficulte: number;
  app = new AppComponent();
  fin: boolean = false;

  createBoard(boardTaille: number) {
    for (var j = 1; j <= boardTaille; j++) {
      this.boardX = [];
      for (var i = 1; i <= boardTaille; i++) {
        this.boardX.push(0);
      }
      this.boardY.push(this.boardX);
    }
    this.placeDoor(boardTaille);
    for (var j = 1; j <= boardTaille; j++) {
      this.boardX = [];
      for (var i = 1; i <= boardTaille; i++) {
        this.boardX.push(-1);
      }
      this.boardPlayed.push(this.boardX);
    }
  }

  placeDoor(boardTaille: number) {
    for (var i = 0; i < boardTaille; i++) {
      this.randomX = Math.floor(Math.random() * Math.floor(boardTaille));
      this.randomY = Math.floor(Math.random() * Math.floor(boardTaille));
      if (this.boardY[this.randomY][this.randomX] != 2) {
        this.boardY[this.randomY][this.randomX] = 2;
      } else {
        i--;
      }
    }
  }

  attack(x: number, y: number) {
    console.log(y, x);
    console.log(this.boardID);

    if (this.boardY[y][x] == 2 && this.boardPlayed[y][x] != 2) {
      this.door++;
    }

    this.boardPlayed[y][x] = this.boardY[y][x];
    console.log(this.door);
    console.log(this.difficulte);
    if (this.door == this.difficulte) {
      this.fin = true;
      console.log("fin");

      this.app.enableAllBoard();
    }
  }
  refresh(): void {
    window.location.reload();
  }

  constructor() {}

  ngOnInit() {
    this.createBoard(this.difficulte);
  }
}
