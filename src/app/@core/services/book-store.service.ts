import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book, BookAuthors } from '../book.model';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  constructor(private httpClient: HttpClient) {}

  getBooks(limit: number): Observable<Array<Book>>{
    return this.httpClient.get<Array<Book>>(`${environment.API_URL}/Books`).pipe(map(books => books.slice(0, limit)));
  }

  getAuthors(bookId: number): Observable<Array<BookAuthors>>{
    return this.httpClient.get<Array<BookAuthors>>(`${environment.API_URL}/Authors/authors/books/${bookId}`);
  }
}
