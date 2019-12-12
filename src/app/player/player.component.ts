import { Component, OnInit } from "@angular/core";
import { BoardComponent } from "../board/board.component";

@Component({
  selector: "app-player",
  templateUrl: "./player.component.html",
  styleUrls: ["./player.component.css"]
})
export class PlayerComponent implements OnInit {
  constructor() {}
  board = new BoardComponent();

  ngOnInit() {
    console.log(this.board.door);
  }
}
