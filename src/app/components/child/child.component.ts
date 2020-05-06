import { Component, Input, Output, EventEmitter, OnInit,
  DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy, OnChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input() parentMessage: number;

  childMessage: number = 0;

  @Output() messageEvent = new EventEmitter<number>();

  constructor() { console.log('Constructor Work!'); }

  ngOnChanges() {
    console.log('ngOnChanges Work!');
}
  ngOnInit() {
      console.log('ngOnInit Work!');
  }
  ngDoCheck() {
      console.log('ngDoCheck Work!');
  }
  ngAfterContentInit() {
      console.log('ngAfterContentInit Work!');
  }
  ngAfterContentChecked() {
      console.log('ngAfterContentChecked Work!');
  }
  ngAfterViewInit() {
      console.log('ngAfterViewInit Work!');
  }
  ngAfterViewChecked() {
      console.log('ngAfterViewChecked Work!');
  }
  ngOnDestroy() {
      console.log('ngOnDestroy Work!');
  }

  onClickChild(){
    this.messageEvent.emit(this.childMessage++)
  }

}
