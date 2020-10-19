import { Directive, ElementRef, OnInit, Renderer } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';

@Directive({
  selector: '[appShowIfLogged]'
})
export class ShowIfLoggedDirective implements OnInit {

  currentDisplay: string;

  constructor(
    private userService: UserService,
    private renderer: Renderer,
    private elementRef: ElementRef<any>) { }

  ngOnInit(): void {
    this.currentDisplay = getComputedStyle(this.elementRef.nativeElement).display;
    this.userService.getUser().subscribe(user => {
      if (user) {
        console.log(`o usuário está logado: ${this.userService.isLogged()}`);
        this.setDisplay(this.currentDisplay);
      } else {
        this.currentDisplay = getComputedStyle(this.elementRef.nativeElement).display;
        this.setDisplay('none');
      }
    });
  }

  setDisplay(value: string) {
    this.renderer.setElementStyle(
      this.elementRef.nativeElement, 'display', value);

  }

}
