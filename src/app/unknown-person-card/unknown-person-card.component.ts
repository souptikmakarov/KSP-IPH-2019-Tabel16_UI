import { Component, OnInit, Input } from '@angular/core';
import { Unkown_Person } from '../models/unknown_person';

@Component({
  selector: 'app-unknown-person-card',
  templateUrl: './unknown-person-card.component.html',
  styleUrls: ['./unknown-person-card.component.css']
})
export class UnknownPersonCardComponent implements OnInit {

  constructor() { 
  }

  ngOnInit() {
  }

  _toSearch: Unkown_Person;
  get toSearch(): Unkown_Person {
    return this._toSearch;
  }

  @Input('toSearch')
  set toSearch(value: Unkown_Person) {
    this._toSearch = value;
  }

}
