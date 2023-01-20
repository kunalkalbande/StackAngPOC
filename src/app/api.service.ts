import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IStudent} from './models/student';
import { Observable } from 'rxjs';
const  baseAddress="http://localhost:5000/api/";
@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http:HttpClient) {

    
   }
    getStudents():Observable<IStudent[]>{
    console.log('api call');
    return this.http.get<IStudent[]>(baseAddress+'getall'); 
    }

    postStudent(student:IStudent)
    {
      console.log("student:::",student);
      return this.http.post(baseAddress+'post',student);
    }
    patchStudent(student:any)
    {
      return this.http.patch(baseAddress+'update/'+student._id,student);
    }
    deleteStudent(student:any)
    {
      return this.http.delete(baseAddress+'delete/'+student._id,student);
    }
}
