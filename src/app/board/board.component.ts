import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.css"]
})
export class BoardComponent implements OnInit {
  verifId: number = 0;
  boardID: number;
  boardX: number[] = [];
  boardY: number[] = [];

  createBoard(boardTaille: number) {
    if (this.verifId > 0) {
      this.boardID = 2;
    } else {
      this.boardID = 1;
    }
    for (var i = 1; i <= boardTaille; i++) {
      this.boardX.push(i);
      this.boardY.push(i);
    }
  }

  constructor() {}

  ngOnInit() {
    this.createBoard(5);
    console.log("test");
  }
}
