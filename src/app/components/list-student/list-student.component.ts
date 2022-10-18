import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/Student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
  message!:boolean;
  students:Student[]=[];

  constructor(private service:StudentService) { }

  ngOnInit(): void {
    this.service.getStudents().subscribe((data)=>{
      this.students =data
    });

  }
  deleteStudent(id:number){
    // console.log(id);
    this.service.deleteStudent(id).subscribe((student)=>{
  
      this.ngOnInit();
      this.message=true;
      
    })
    
  }


}
