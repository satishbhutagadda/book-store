import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { BookAuthors } from '../@core/book.model';

@Component({
  selector: 'app-book-dialog',
  templateUrl: './book-authors-dialog.component.html',
  styleUrls: ['./book-authors-dialog.component.css']
})
export class BookAuthorsDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {authors: Array<BookAuthors>}) {}

  ngOnInit(): void {
  }

}
