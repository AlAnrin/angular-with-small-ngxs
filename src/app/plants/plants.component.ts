import { Component, OnInit } from '@angular/core';
import {Add, RootState} from "../root-state";
import {Select, Store} from "@ngxs/store";
import {Observable} from "rxjs";

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.scss']
})
export class PlantsComponent implements OnInit {
  @Select(RootState)
  count$!: Observable<number>;

  constructor(private store: Store) {}

  onClick() {
    this.store.dispatch(new Add());
  }

  ngOnInit(): void {
  }
}
