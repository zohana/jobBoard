import { JobBoardService } from './../services/job-board/job-board.service';


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-boards',
  templateUrl: './job-boards.component.html',
  styleUrls: ['./job-boards.component.css']
})
export class JobBoardsComponent implements OnInit {

  jobBoards : any ={};

  query: any ={};

  constructor(private jobBoardService: JobBoardService) { }
  
    ngOnInit() {
      this.populateJobs();  
    }
  
    private populateJobs(){
      this.jobBoardService.getJobs(this.query)
      .subscribe(jobBoards => this.jobBoards = jobBoards );
    }

}
