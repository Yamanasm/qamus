import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  result: string;

  search: string;

  constructor() {
  }

  ngOnInit() {
  }

  onSearch() {
    this.result = this.search;
  }
}
