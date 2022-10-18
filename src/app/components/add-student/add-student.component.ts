import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/Student';
import { StudentService } from 'src/app/services/student.service';
import{FormGroup,FormControl} from '@angular/forms'

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private service:StudentService) { }
  public message!:boolean
  addstudent=new FormGroup({
    id:new FormControl(''),
    name:new FormControl(''),
    email:new FormControl(''),
    phone:new FormControl(''),
    city:new FormControl('')
  })

  ngOnInit(): void {
  }
  saveData(){
    console.log(this.addstudent.value);
this.service.saveStudent(this.addstudent.value).subscribe((result)=>{
  // console.log(result);
  this.message=true
  this.addstudent.reset({});
  
})
  }

}
