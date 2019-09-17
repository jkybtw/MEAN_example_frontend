import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

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

  constructor(private issueService: IssueService, private router: Router) { }

  ngOnInit() {
    this.fetchIssues();
  }

  fetchIssues() {
    this.issueService.getIssues().subscribe((data: Issue[]) => {
      this.issues = data;
      console.log('Data requested ...');
      console.log(this.issues);
    });
  }

  editIssue(id: string) {
    this.router.navigate([`/edit/${id}`]);
  }

  deleteIssue(id: string) {
    this.issueService.deleteIssue(id).subscribe(() => {
      this.fetchIssues();
    });
  }

}
