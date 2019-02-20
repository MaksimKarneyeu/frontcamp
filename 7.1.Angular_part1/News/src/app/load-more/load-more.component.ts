import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'load-more',
  templateUrl: './load-more.component.html',
  styleUrls: ['./load-more.component.css']
})
export class LoadMoreComponent implements OnInit {
  @Output() loadMoreOutput: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {  
  }

  public loadMore():void {
    const loadMoreCount : number = 5;
    this.loadMoreOutput.emit(loadMoreCount);
  } 
}