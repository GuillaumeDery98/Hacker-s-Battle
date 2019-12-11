import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.css"]
})
export class BoardComponent implements OnInit {
  verifId: number = 0;
  boardID: number;
  boardX: number[];
  boardY: number[][] = [];
  boardPlayed: number[][] = [];
  value: number = 0;
  random: number = 0;

  createBoard(boardTaille: number) {
    if (this.verifId > 0) {
      this.boardID = 2;
    } else {
      this.boardID = 1;
    }
    for (var j = 1; j <= boardTaille; j++) {
      this.boardX = [];
      for (var i = 1; i <= boardTaille; i++) {
        this.getRandomInt(boardTaille);
        if (this.random > 3) {
          this.boardX.push(2);
        } else {
          this.boardX.push(0);
        }
      }
      this.boardY.push(this.boardX);
    }
    for (var j = 1; j <= boardTaille; j++) {
      this.boardX = [];
      for (var i = 1; i <= boardTaille; i++) {
        this.boardX.push(-1);
      }
      this.boardPlayed.push(this.boardX);
    }
  }

  getRandomInt(boardTaille: number) {
    this.random = Math.floor(Math.random() * Math.floor(5));
  }

  attack(x: number, y: number) {
    console.log(y, x);

    this.boardPlayed[y][x] = this.boardY[y][x];
  }

  constructor() {}

  ngOnInit() {
    this.createBoard(5);
  }
}
