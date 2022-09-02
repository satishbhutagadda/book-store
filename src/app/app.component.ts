import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { Book, ITypedForm } from './@core/book.model';
import { LoaderService } from './@core/services/loader.service';
import { BookStoreService } from './@core/services/book-store.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoading: Subject<boolean> = this.loader.isLoading;
  form!: FormGroup<ITypedForm>;
  books: Array<Book> = [];

  constructor(private loader: LoaderService, private fb: FormBuilder, private bookStore: BookStoreService) { }

  ngOnInit(): void {
    this.form = this.fb.group<ITypedForm>({
      title: new FormControl(null),
      publishDate: new FormControl(null),
    });

    this.loadBooks(21);
  }

  private loadBooks(limit: number): void {
    this.bookStore.getBooks(limit).subscribe(books => {
      this.books = books;
      console.log('response', books);
    })
  }

  submit(): void {
    this.filterBooks(this.form.value);
  }

  private filterBooks(filters: any): void {
    this.books = this.books.filter(book => {
        return Object.keys(filters).filter(key => filters[key]).every((key: string) => {
          if(key === 'title'){
            return book.title.toLowerCase().match(filters[key].toLowerCase())
          }
          if(key === 'publishDate'){
            return new Date(book.publishDate).toLocaleDateString() == new Date(filters.publishDate).toLocaleDateString()
          }
          return false
        })
    })
  }

}
