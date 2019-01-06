import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatNativeDateModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {
  MatButtonModule, MatDialogModule, MatIconModule, MatInputModule, MatPaginatorModule, MatSortModule,
  MatTableModule, MatToolbarModule,
} from '@angular/material';
import { DataService } from './services/data.service';
import { AddDialogComponent } from './dialogs/add.dialog/add.dialog.component';
import { EditDialogComponent } from './dialogs/edit.dialog/edit.dialog.component';
import { DeleteDialogComponent } from './dialogs/delete.dialog/delete.dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    AddDialogComponent,
    EditDialogComponent,
    DeleteDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatDatepickerModule
  ],
  entryComponents: [
    AddDialogComponent,
    EditDialogComponent,
    DeleteDialogComponent
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
