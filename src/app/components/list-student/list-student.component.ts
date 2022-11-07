import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/Student';
import { StudentService } from 'src/app/services/student.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
  students:Student[]=[];
 id!:number;
 message!:boolean

  constructor(private service:StudentService,private actRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getAllStudents().subscribe((response)=>{
      this.students =response;
    });
let id= this.actRoute.snapshot.params['id'];

  }

 
  deleteStudent(id:number){
    this.service.deleteStudent(id).subscribe((student)=>{
      this.message= true;
      this.ngOnInit()
      
    })
  }

}
