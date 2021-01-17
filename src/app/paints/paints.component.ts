import { Component, OnInit } from '@angular/core';
import {Store} from "@ngxs/store";

@Component({
  selector: 'app-paints',
  templateUrl: './paints.component.html',
  styleUrls: ['./paints.component.scss']
})
export class PaintsComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  getImage() {

  }
}
