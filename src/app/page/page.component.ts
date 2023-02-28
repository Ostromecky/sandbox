import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  template: `
    <h1>Welcome to the Page</h1>
    <div class="ico-logo-container">
      <img src="assets/icotera-logo-dark.svg" />
    </div>,
  `,
  standalone: true
})
export class PageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
