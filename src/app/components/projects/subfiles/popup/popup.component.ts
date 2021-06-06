import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material'

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }

  closeDialog(){
    this.dialog.closeAll();
  }
}
