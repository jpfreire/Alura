import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
    ) {

    }

  ngOnInit(): void {
    this.router.events.
    pipe(filter( event => event instanceof NavigationEnd)).
    pipe(switchMap(() => {
      let route = this.activatedRoute;
      while (route.firstChild) { route = route.firstChild; };
      return route.data;
    })).subscribe((event) => {
      console.log('Evento', event);
      this.titleService.setTitle(event.title);
    });
  }
}
