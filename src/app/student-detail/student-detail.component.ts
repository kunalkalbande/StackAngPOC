import { Component } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent {
  studentsData:any;
  constructor(private api: ApiService) { }
  ngOnInit() {
    this.api.getStudents().subscribe((data) => {
      console.log(data);
      this.studentsData = data;
     
    });
  }
}
