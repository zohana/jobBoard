import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { JobFormCreateComponent } from './job-form-create/job-form-create.component';
import { JobService } from './services/job/job.service';
import { JobsListComponent } from './jobs-list/jobs-list.component';
import { SummaryPipe } from './summary.pipe';
import { NavComponent } from './nav/nav.component';
import { PaginationComponent } from './pagination/pagination.component';
import { FooterComponent } from './footer/footer.component';
import { JobBoardsComponent } from './job-boards/job-boards.component';
import { JobBoardService } from './services/job-board/job-board.service';



@NgModule({
  declarations: [
    AppComponent,
    JobFormCreateComponent,
    JobsListComponent,
    SummaryPipe,
    NavComponent,
    PaginationComponent,
    FooterComponent,
    JobBoardsComponent
    
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'jobs', pathMatch: 'full' },
      { path: 'jobs', component: JobsListComponent },
      { path: 'createForm', component: JobFormCreateComponent },
      { path: 'jobBoard', component: JobBoardsComponent },
      { path: '**', redirectTo: 'job' }
])
    
  ],
  providers: [
    JobService,
    JobBoardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
