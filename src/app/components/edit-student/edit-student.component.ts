import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import{FormGroup,FormControl} from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/models/Student';


@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  message!:boolean;
  

  constructor(private service:StudentService,
    private activatedRoute:ActivatedRoute) { }
  editstudent=new FormGroup({
    id:new FormControl(''),
    name:new FormControl(''),
    email:new FormControl(''),
    phone:new FormControl(''),
    city:new FormControl('')
  })

  ngOnInit(): void {
    let id= this.activatedRoute.snapshot.params['id']
    this.service.getStudentById(id).subscribe((student)=>{
      console.log(student);
      this.editstudent=new FormGroup({
        id:new FormControl(''),
        name:new FormControl(''),
        email:new FormControl(''),
        phone:new FormControl(''),
        city:new FormControl('')
      });

      
    });

    
      
    
  }
  editData(){

    this.service.getStudentById(this.activatedRoute.snapshot.params['id']).subscribe((student)=>{
      this.editstudent=new FormGroup({
        id:new FormControl(student['id']),
        name:new FormControl(student['name']),
        email:new FormControl(student['email']),
        phone:new FormControl(student['phone']),
        city:new FormControl(student['city'])
      })
      this.message=true;
      // this.editstudent.reset({});
      
    })
      }
  
  

}


