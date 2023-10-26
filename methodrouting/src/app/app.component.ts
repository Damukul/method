import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'methodrouting';
  constructor(public router:Router)
  {}
  lazyloading()
  {
    this.router.navigateByUrl('module1/module1-component')
  }
}
