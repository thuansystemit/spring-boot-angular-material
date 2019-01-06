import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Issue } from '../model/issue';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NotificationService } from '../services/notification.service';

@Injectable()
export class DataService {
  private readonly API_URL = 'http://localhost:8080/api/issues';

  dataChange: BehaviorSubject<Issue[]> = new BehaviorSubject<Issue[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;

  constructor (private httpClient: HttpClient, private notificationService: NotificationService) {}

  get data(): Issue[] {
    return this.dataChange.value;
  }

  getDialogData() {
    return this.dialogData;
  }

  /** CRUD METHODS */
  getAllIssues(): void {
    this.httpClient.get<Issue[]>(this.API_URL).subscribe(data => {
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
      });
  }

  // DEMO ONLY, you can find working methods below
  // addIssue (issue: Issue): void {
  //   this.dialogData = issue;
  // }

  addIssue(issue: Issue): void {
    this.httpClient.post(this.API_URL, issue).subscribe(data => {
      this.dialogData = issue;
      this.notificationService.message('Successfully added');
      this.getAllIssues;
      },
      (err: HttpErrorResponse) => {
        this.notificationService.message('Error occurred. Details: ' + err.name + ' ' + err.message);
    });
   }

  updateIssue (issue: Issue): void {
    this.dialogData = issue;
    this.httpClient.put(this.API_URL + '/' + issue.id, issue).subscribe(data => {
      this.dialogData = issue;
      this.notificationService.message('Successfully edited');
      this.getAllIssues;
    },
    (err: HttpErrorResponse) => {
      this.notificationService.message('Error occurred. Details: ' + err.name + ' ' + err.message);
    }
  );
  }

  // DELETE METHOD
  deleteIssue(id: number): void {
    this.httpClient.delete(this.API_URL + '/' + id).subscribe(data => {
      this.notificationService.message('Successfully deleted');
      },
      (err: HttpErrorResponse) => {
        this.notificationService.message('Error occurred. Details: ' + err.name + ' ' + err.message);
      }
    );
  }
}



/* REAL LIFE CRUD Methods I've used in my projects. ToasterService uses Material Toasts for displaying messages:

    // ADD, POST METHOD
    addItem(kanbanItem: KanbanItem): void {
    this.httpClient.post(this.API_URL, kanbanItem).subscribe(data => {
      this.dialogData = kanbanItem;
      this.toasterService.showToaster('Successfully added', 3000);
      },
      (err: HttpErrorResponse) => {
      this.toasterService.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
    });
   }

    // UPDATE, PUT METHOD
     updateItem(kanbanItem: KanbanItem): void {
    this.httpClient.put(this.API_URL + kanbanItem.id, kanbanItem).subscribe(data => {
        this.dialogData = kanbanItem;
        this.toasterService.showToaster('Successfully edited', 3000);
      },
      (err: HttpErrorResponse) => {
        this.toasterService.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
      }
    );
  }

  // DELETE METHOD
  deleteItem(id: number): void {
    this.httpClient.delete(this.API_URL + id).subscribe(data => {
      console.log(data['']);
        this.toasterService.showToaster('Successfully deleted', 3000);
      },
      (err: HttpErrorResponse) => {
        this.toasterService.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
      }
    );
  }
*/



