import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  uri = 'https://powerful-everglades-94556.herokuapp.com';
  // creates instance of http in class to use
  constructor(private http: HttpClient) { }

  getIssues() {
    return this.http.get(`${this.uri}/issues`);
  }

  getIssueById(id: string) {
    return this.http.get(`${this.uri}/issues/${id}`);
  }

  addIssue(title: string, responsible: string, description: string, severity: string) {
    const issue = {
      title,
      responsible,
      description,
      severity
    };
    return this.http.post(`${this.uri}/issues/add`, issue);
  }

  updateIssue(id: string, title: string, responsible: string, description: string, severity: string, status: string) {
    const issue = {
      title,
      responsible,
      description,
      severity,
      status
    };
    return this.http.post(`${this.uri}/issues/update/${id}`, issue);
  }

  deleteIssue(id: string) {
    return this.http.get(`${this.uri}/issues/delete/${id}`);
  }
}
