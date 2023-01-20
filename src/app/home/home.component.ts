import { Component,AfterViewInit,OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {CreateComponent} from '../create/create.component';
import {ConfirmationComponent} from '../confirmation/confirmation.component';
import { MatTableDataSource } from '@angular/material/table';
import { IStudent } from '../models/student';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
const COLUMNS_SCHEMA = [
  {
      key: "name",
      type: "text",
      label: "Full Name"
  },
  {
      key: "age",
      type: "number",
      label: "Age"
  },
  {
      key: "isEdit",
      type: "isEdit",
      label: ""
  }
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit,AfterViewInit {
  title = 'Students';
  studentsData= new MatTableDataSource<IStudent>();
  columndefs : any[] = ['name','age'];
  columnsSchema: any = COLUMNS_SCHEMA;
  displayedColumns: string[] = COLUMNS_SCHEMA.map((col) => col.key);
  name:any;
  age:any;
  @ViewChild(MatSort, { static: false })
  sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private api: ApiService,public dialog: MatDialog) { }
  ngOnInit() {
    this.api.getStudents().subscribe((data:IStudent[]) => {
      console.log(data);
      this.studentsData.data = data;
     
    });
  }
  ngAfterViewInit(): void {
    this.studentsData.sort=this.sort;
    this.studentsData.paginator=this.paginator;
  }
  public doFilter = (value: string) => {
    this.studentsData.filter = value.trim().toLocaleLowerCase();
  }
  openDialog(): void {
    let dialogRef = this.dialog.open(CreateComponent, {
      width: '250px',
      data: {name:this.name,age:this.age}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.name = result.name;
      this.api.postStudent(result).subscribe((data)=>{
        console.log(data);
        this.api.getStudents().subscribe((data:IStudent[]) => {
          console.log(data);
          this.studentsData.data = data;
         
        });
      });
     
    });
  }
  onDoneClick(element:any):void{
    element.isEdit = !element.isEdit
    console.log(element);
    this.api.patchStudent(element).subscribe((data)=>{
      console.log(data);
    });
  }
  onDeleteClick(element:any):void{
   
    console.log(element);
    let dialogRef = this.dialog.open(ConfirmationComponent, {
      width: '350px',
      data: element
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result === true) {
        console.log('The dialog was closed');
        this.api.deleteStudent(element).subscribe(() => {
          this.api.getStudents().subscribe((data:IStudent[]) => {
            console.log(data);
            this.studentsData.data = data;
           
          });

        }
        );
      }
    });
  
  
  }
}
