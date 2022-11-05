import { Injectable } from '@angular/core';
import { Books } from './book-data';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }
  getBooks()
  {
    return Books;
  }
}
