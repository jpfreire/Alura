import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';

import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  @Output() onDebouncedTyping = new EventEmitter<string>();

  debounce = new Subject<string>();

  constructor() { }

  ngOnInit(): void {
    this.debounce.pipe(debounceTime(500))
    .subscribe(txtDigitado => {this.onDebouncedTyping.emit(txtDigitado);
    console.log(txtDigitado)});
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

}
