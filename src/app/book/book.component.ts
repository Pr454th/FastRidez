import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';
import { Book } from './book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(private bookservice:BookService) { }
  books!:Book[];
  getBooks()
  {
    this.books=this.bookservice.getBooks();
  }

  ngOnInit(): void {
    this.getBooks();
  }

}
