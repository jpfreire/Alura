import { Directive, ElementRef, OnInit, Renderer } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';

@Directive({
  selector: '[appShowIfLogged]'
})
export class ShowIfLoggedDirective implements OnInit {

  constructor(
    private userService: UserService,
    private renderer: Renderer,
    private elementRef: ElementRef<any>) { }

  ngOnInit(): void {
    console.log(`o usuário está logado: ${this.userService.isLogged()}`);
    if (!this.userService.isLogged()) {
      this.renderer.
      setElementStyle(this.elementRef.nativeElement, 'display', 'none');
    }
  }

}
