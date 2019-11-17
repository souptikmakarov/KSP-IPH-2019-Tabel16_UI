import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../models/person';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.css']
})
export class PersonCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public criminalCharges = '';

  _person: Person;
  get person(): Person {
    return this._person;
  }

  @Input('person')
  set person(value: Person) {
    this._person = value;
    // this.criminalCharges = value.criminalCharges.length > 0 ? value.criminalCharges.map(c => c.name).join(',') : 'None'
  }

}
