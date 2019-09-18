import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IssueService } from '../../issue.service';
import { Issue } from 'src/app/issue.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  issues: Issue[] = [];
  displayedColumns = ['title', 'responsible', 'description', 'severity', 'status', 'actions'];
  showSpinner: boolean;

  constructor(private issueService: IssueService, private router: Router) { }

  ngOnInit() {
    this.fetchIssues();
    this.showSpinner = true;
  }

  fetchIssues() {
    this.issueService.getIssues().subscribe((data: Issue[]) => {
      this.issues = data;
      this.showSpinner = false;
    });
  }

  editIssue(id: string) {
    this.router.navigate([`/edit/${id}`]);
  }

  deleteIssue(id: string) {
    this.showSpinner = true;
    this.issueService.deleteIssue(id).subscribe(() => {
      this.fetchIssues();
    });
  }

  refresh() {
    this.showSpinner = true;
    this.issueService.getIssues().subscribe((data: Issue[]) => {
      this.issues = data;
      this.showSpinner = false;
    });
  }

}
