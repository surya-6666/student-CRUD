import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Student } from '../models/Student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  public dataUrl:string=`http://localhost:3000/students`;

  constructor(private http:HttpClient) { }
  getStudents():Observable<Student[]>{
    return this.http.get<Student[]>(this.dataUrl);
  }
  saveStudent(student:Student):Observable<Student>{
    return this.http.post<Student>(this.dataUrl,student);
  }
  deleteStudent(id:number):Observable<Student>{
    return this.http.delete<Student>(`${this.dataUrl}/${id}`);
  }
  getStudentById(id:number):Observable<Student>{
    return this.http.get<Student>(`${this.dataUrl}/${id}`)
  }







}
