import { PaginationComponent } from './../pagination/pagination.component';
import { JobService } from './../services/job/job.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css']
})
export class JobsListComponent implements OnInit {

  private readonly PAGE_SIZE = 10; 
  
  jobs: any = {};

  isTitleExpanded: boolean = false;
  titleLength:number = 10;

  isEmailExpanded:boolean = false;
  emailLength: number = 10;

  isCreatedByExpanded:boolean = false;
  cretaedByLength: number = 3;

  queryResult: any = {};
  query: any = {
    pageSize: this.PAGE_SIZE
  }; 

  isJobExpired: boolean = true;

 

  onlineUrl = 'http://board.thejobwindow.com/home/onlineapply/';

  constructor(private jobService: JobService) { }

  ngOnInit() {
    this.populateJobs();  
    /* this.jobService.getJobs()
    .subscribe(jobs => this.jobs = jobs.items); */
  }

  private populateJobs(){
    this.jobService.getJobs(this.query)
    .subscribe(jobs => this.jobs = jobs);
  }

  onFilterChange(){
    this.populateJobs();
  }

  sortBy(columnName) {
    if (this.query.sortBy === columnName) {
      this.query.isSortAscending = !this.query.isSortAscending; 
    } else {
      this.query.sortBy = columnName;
      this.query.isSortAscending = true;
    }
    this.populateJobs();
}

  titleToggle(){
    this.isTitleExpanded=!this.isTitleExpanded;
    this.titleLength = this.isTitleExpanded ? 1000 : 10;
  }

  emailToggle(){
    this.isEmailExpanded=!this.isEmailExpanded;
    this.emailLength = this.isEmailExpanded ? 1000 : 10;
  }

  createdByToggle(){
    this.isCreatedByExpanded=!this.isCreatedByExpanded;
    this.cretaedByLength = this.isCreatedByExpanded ? 1000 : 3;
  }

  onPageChange(page) {
    this.query.page = page; 
    this.populateJobs();
  }

  

}
