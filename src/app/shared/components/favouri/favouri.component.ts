import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favouri',
  templateUrl: './favouri.component.html',
  styleUrls: ['./favouri.component.scss']
})
export class FavouriComponent implements OnInit {
  @Input('favouris') favouris :any[];
  constructor() { }

  ngOnInit() {
  }

}
