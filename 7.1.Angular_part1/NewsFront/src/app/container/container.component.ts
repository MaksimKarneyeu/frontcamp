import { OnInit, Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})

export class ContainerComponent implements OnInit {
 
  constructor() { 
  }
  public title = 'News'; 

  ngOnInit() {     
   
  }
}