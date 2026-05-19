<hello name="{{ name }}"></hello>
<p>
  after view init
</p>
<div #myDiv>hello content</div>

import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements AfterViewInit {
  @ViewChild('myDiv') myDiv: ElementRef;

  ngAfterViewInit() {
    console.log(this.myDiv.nativeElement.textContent);
    this.myDiv.nativeElement.style.backgroundColor = 'yellow';

    console.log('yellow' );
  }
}
