import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../@core/book.model';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { BookAuthorsDialogComponent } from '../book-dialog/book-authors-dialog.component';
import { BookStoreService } from '../@core/services/book-store.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  @Input() books!: Array<Book>;

  constructor(public dialog: MatDialog, private bookStore: BookStoreService) {}
  
  ngOnInit(): void {
  }
  
  findAuthors(bookId: number) {
    this.bookStore.getAuthors(bookId).subscribe(authors => {
      console.log('response', authors);
      this.dialog.open(BookAuthorsDialogComponent, {
        data: {
          authors,
        },
      });
    })
  }
}
