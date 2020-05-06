import { Component, ViewChild, OnChanges, OnInit,
  DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { ChildComponent } from '../child/child.component'

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {

  @ViewChild(ChildComponent)

  childComponent: ChildComponent;

  parentMessage: number = 0;

  childMessage: number;

  textMessage: string;
  status: string

  constructor() { console.log('Constructor Work!'); }

  ngOnChanges() {
    console.log('ngOnChanges Work!');
}
  ngOnInit() {
      console.log('ngOnInit Work!');
  }
  ngDoCheck() {
      console.log(this.textMessage);
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

  receiveMessage($event) {
    this.childMessage = $event;
  }

  onCLickParent(){
    this.parentMessage++;
  }

  onClickViewChild(){
    this.childComponent.onClickChild();
  }

}
