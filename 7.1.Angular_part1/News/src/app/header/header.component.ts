import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() source: string;

  constructor() {     
  }

  ngOnInit() {
    this.source = "All Sources";
  }
}
