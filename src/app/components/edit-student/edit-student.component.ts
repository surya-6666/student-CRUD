import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Student } from 'src/app/models/Student';
import { StudentService } from 'src/app/services/student.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  message!:boolean;
  id!:number;
  constructor(private service:StudentService,private actRoute:ActivatedRoute) { }
  student!:Student;

  editStudent= new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone:new FormControl(''),
    city:new FormControl('')

  });

  ngOnInit(): void {
    let id = this.actRoute.snapshot.params['id'];
    this.service.getStudentById(id).subscribe((student:Student)=>{
      this.editStudent= new FormGroup({
        name: new FormControl(student['name']),
        email: new FormControl(student['email']),
        phone:new FormControl(student['phone']),
        city:new FormControl(student['city'])
    
      });
      
    });


  

  

  

  }
  updateData(){
    console.log(this.editStudent.value);
  this.service.updateStudent(this.actRoute.snapshot.params['id'],this.editStudent.value).subscribe((result)=>{
    console.log(result);
    
  })
    
    
    }

  
    

  }




