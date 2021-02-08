import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  newEmployeeClicked = false;
  tableView = false;
  dataAvailable = false;
  page = 1;
  pageSize =10;

  // employees = [
  //   { fname: 'Kevin', lname:'ram', id: '201', gender:'male',grade: 'A',ODC:'E2',BU:'BU',project:'CITI'},
  //   { fname: 'Michael',lname:'ram', id:'202', gender:'male',grade: 'A',ODC:'E2',BU:'BU',project:'CITI'}
  // ];

  employees = []
  
  color;

  constructor() { }

  ngOnInit() {
    if(this.employees.length > 0){
      this.tableView = true
      this.dataAvailable = true
    } else {
      this.dataAvailable = true
    }

  }
  ngOnChanges(){
    console.log('onchanges')
  }

  model: any = {};
  model2: any = {}; 

  addEmployee() {
    this.employees.push(this.model);
    
    if(this.employees.length > 0){
      this.tableView = true  
      this.dataAvailable = false
    }
    
    this.model = {};
  }

  deleteEmployee(i) {
    this.employees.splice(i);
    console.log(i);
  }

  myValue;

  editEmployee(editEmployeeInfo) {
    this.model2.fname = this.employees[editEmployeeInfo].fname; // this.employees[2].fname
    this.model2.lname = this.employees[editEmployeeInfo].lname;
    this.model2.id = this.employees[editEmployeeInfo].id;
    this.model2.gender = this.employees[editEmployeeInfo].gender;
    this.model2.grade = this.employees[editEmployeeInfo].grade;
    this.model2.ODC = this.employees[editEmployeeInfo].ODC;
    this.model2.BU = this.employees[editEmployeeInfo].BU;
    this.model2.project = this.employees[editEmployeeInfo].project;
    this.myValue = editEmployeeInfo;
  }

  viewEmployee(viewEmployeeInfo) {
    this.model2.fname = this.employees[viewEmployeeInfo].fname; // this.employees[2].fname
    this.model2.lname = this.employees[viewEmployeeInfo].lname;
    this.model2.id = this.employees[viewEmployeeInfo].id;
    this.model2.gender = this.employees[viewEmployeeInfo].gender;
    this.model2.grade = this.employees[viewEmployeeInfo].grade;
    this.model2.ODC = this.employees[viewEmployeeInfo].ODC;
    this.model2.BU = this.employees[viewEmployeeInfo].BU;
    this.model2.project = this.employees[viewEmployeeInfo].project;
    this.myValue = viewEmployeeInfo;
  }

  updateEmployee() {
    let editEmployeeInfo = this.myValue; // 2
    for(let i = 0; i < this.employees.length; i++) {
      if(i == editEmployeeInfo) {  //2==2 
        this.employees[i] = this.model2;
        this.model2 = {};
      }
    }
  }





  addNewEmployeeBtn() {
    this.newEmployeeClicked = !this.newEmployeeClicked;
  }

   changeColorOne() {
     this.color = !this.color;
     if (this.color) {
       return '#ffffff';
     } else {
      return '#f6f6f6';
     }
  }

}
