import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, EmailValidator } from "@angular/forms";
//import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'job-form-create',
  templateUrl: './job-form-create.component.html',
  styleUrls: ['./job-form-create.component.css']
})
export class JobFormCreateComponent  {

  states;

  isEmailApply;

  isStateDisabled: true;

 // isOnlineApply: true;

  form = new FormGroup({
      title: new FormControl('', [ Validators.required, Validators.minLength(3)]),

      employmentTypeId : new FormControl('', Validators.required),
      
      occupation: new FormControl(''),

      categoryId: new FormControl('', [Validators.required]),

      jobDescription: new FormControl('', Validators.required),

      jobRequired: new FormControl('', Validators.required),

      salary: new FormControl('', Validators.pattern('[0-9,]*')),

      currency: new FormControl(''),

      salaryTypeId: new FormControl('',Validators.required),

      countryId: new FormControl('',Validators.required),

      stateId: new FormControl({value:'',disabled:true}, Validators.required),

      city: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(60)]),

      zipCode: new FormControl('', [Validators.required,Validators.maxLength(10)]),

      address: new FormControl('', Validators.maxLength(120)),

      minExperience: new FormControl('',Validators.pattern('[0-3]?[0-9]')),

      maxExperience: new FormControl('',Validators.pattern('[0-3]?[0-9]')),

      companyName: new FormControl('',[Validators.required, Validators.maxLength(120)]),

      jobBoardId: new FormControl('', Validators.required),

      emailTo: new FormControl(''),
      
  });

  get title() {
    //console.log(this.form.get('title')); 
    return this.form.get('title');
  }

  get employmentTypeId() { 
    return this.form.get('employmentTypeId');
  }

  get categoryId() { 
    return this.form.get('categoryId');
  }

  get jobDescription() { 
    return this.form.get('jobDescription');
  }

  get jobRequired() { 
    return this.form.get('jobRequired');
  }

  get salary() { 
    //console.log(this.salary);
    return this.form.get('salary');
  }

  get currency() { 
    return this.form.get('currency');
  }

  get salaryTypeId(){
    return this.form.get('salaryTypeId');
  }

  get countryId(){
    return this.form.get('countryId');    
  }

  get stateId(){
    return this.form.get('stateId');
  }

  get city(){
    return this.form.get('city');
  }

  get zipCode(){
    return this.form.get('zipCode');
  }
  
  get address(){
    return this.form.get('address');
  }

  get minExperience(){
    return this.form.get('minExperience');
  }

  get maxExperience(){
    return this.form.get('maxExperience');
  }

  get companyName(){
    return this.form.get('companyName');
  }
  
  get jobBoardId(){
    return this.form.get('jobBoardId');
  }

  get emailTo(){
    return this.form.get('emailTo');
  }

  enableStateInpt(): void {
    let stateInput = this.form.get('stateId')
    stateInput.enable()
  }

  selectState(countryId){
    console.log(countryId  + ' ' + 'is selected');
    this.enableStateInpt();
    this.states = this.countriesAndStates.find(m => m.id == countryId).states;   
  }

  getEmailApplyStatus(jobBoardId: number){
    console.log(jobBoardId + ' ' + ' is selected' );
    this.isEmailApply = this.jobBoards.find(jId => jId.id == jobBoardId).isEmailApply;
    if(this.isEmailApply){
      this.form.get('emailTo').setValidators([Validators.required, Validators.email]);
      this.form.get('emailTo').updateValueAndValidity();  
    }else{
      this.form.get('emailTo').clearValidators();
      this.form.get('emailTo').setValidators(Validators.email);
      this.form.get('emailTo').updateValueAndValidity();      
    }
    
    this.form.get('emailTo').updateValueAndValidity();  
    
      console.log(this.isEmailApply);
  }

  salaryTypes = [
    {id: 1, name: "Per Hour"},
    {id: 2, name: "Per Week"}
  ]

  employmentTypes = [
    {id:1, name: "Full Time" },
    {id:2, name: "Part Time" },
    {id:3, name: "Intern" }
  ];

  selectedOccupations = [
    {id: 1, name: "Occupation-1"},
    {id: 2, name: "Occupation-2"},
    {id: 3, name: "Occupation-3"},
    {id: 4, name: "Occupation-4"},
    {id: 5, name: "Occupation-5"},
    {id: 6, name: "Occupation-6"},
    {id: 7, name: "Occupation-7"}
  ];

  categories =[
    {id: 1, name: "Category-1"},
    {id: 2, name: "Category-2"},
    {id: 3, name: "Category-3"},
    {id: 4, name: "Category-4"},
    {id: 5, name: "Category-5"},
    {id: 6, name: "Category-6"}   
  ];

  currencyTypes=[
    { name: 'CAD' },
    { name: 'US' },
    { name: 'EUR' }
  ];

  jobBoards=[
      { id: 1, name: "Job Board-1", isOnlineApply: false, isEmailApply: true },
      { id: 2, name: "Job Board-2", isOnlineApply: true, isEmailApply: false },
      { id: 3, name: "Job Board-3", isOnlineApply: true, isEmailApply: false },
      { id: 4, name: "Job Board-4", isOnlineApply: false, isEmailApply: true },
      { id: 5, name: "Job Board-5", isOnlineApply: true, isEmailApply: false }
  ];

  countriesAndStates =[
    {
      id: 1,
      name: "United States",
      code: "US",
      states: [
        {
          id: 1,
          name: "New York",
          code: "NY"
        },
        {
          id: 2,
          name: "Alabama",
          code: "AL"
        }
      ]
    },
    {
      id: 2,
      name: "Canada",
      code: "CA",
      states: [
        {
          id: 3,
          name: "Ontario",
          code: "ON"
        },
        {
          id: 4,
          name: "British Columbia",
          code: "BC"
        }
      ]
    }
  ];

}

function newFunction() {
    return this;
}

