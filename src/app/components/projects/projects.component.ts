import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material'
import { PopupComponent } from './subfiles/popup/popup.component';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(
    public dialog:MatDialog
  ) { }

  ngOnInit() {
  }

  openDialog(){
    this.dialog.open( PopupComponent,{
      width:'800px',
      height:'404px'
    });
  }
  

}
