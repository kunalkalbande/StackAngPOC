import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IStudent} from './models/student';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {

    
   }
   getStudents(){
    console.log('api call');
    return this.http.get('http://localhost:5000/api/getall'); 
    }

    postStudent(student:IStudent)
    {
      console.log("student:::",student);
      return this.http.post('http://localhost:5000/api/post',student);
    }
    patchStudent(student:any)
    {
      return this.http.patch('http://localhost:5000/api/update/'+student._id,student);
    }
    deleteStudent(student:any)
    {
      return this.http.delete('http://localhost:5000/api/delete/'+student._id,student);
    }
}
