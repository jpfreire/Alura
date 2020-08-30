import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  debounce = new Subject<string>();

  constructor() { }

  ngOnInit(): void {
    // this.debounce.pipe(debounceTime(500)).subscribe(filtro => this.filtro = filtro);
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

}
