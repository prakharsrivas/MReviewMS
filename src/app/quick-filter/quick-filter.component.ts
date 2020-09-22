import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick-filter',
  templateUrl: './quick-filter.component.html',
  styleUrls: ['./quick-filter.component.scss']
})
export class QuickFilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public openNav() {
    document.getElementById("mySidebar").style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px";
  }

}
