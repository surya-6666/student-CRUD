import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/Student';
import { StudentService } from 'src/app/services/student.service';
import{FormGroup,FormControl}from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  student!:Student;
  message!:boolean;

  constructor(private service:StudentService) { }
  addStudent=new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    phone:new FormControl(''),
    city:new FormControl('')

  })

  ngOnInit(): void {
    // this.service.CreateStudent(student:Student).subscribe((student)=>{
    //   console.log(student);
      
    // })
  }
  createData(){
    console.log(this.addStudent.value);
    this.service.saveStudent(this.addStudent.value).subscribe((response)=>{
      this.student= response;
      this.message= true;
      this.addStudent.reset({});

      
    }
    )

    
   
      
    }
    
   
      
    }
 
    
  


