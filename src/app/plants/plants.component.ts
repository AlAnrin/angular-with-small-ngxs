import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {RootState, PlantChangeAction, IState} from "../root-state";
import { Store, Select } from '@ngxs/store';
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.scss']
})
export class PlantsComponent implements OnInit, OnDestroy {
  plantNumber$: Observable<any>;
  plantNumber: number = 0;
  plantNumberSub: Subscription;

  constructor(private store: Store) {
    this.plantNumber$ = this.store.select(RootState.getPlantChangeValue);
    this.plantNumberSub = this.plantNumber$.subscribe(index => {
      this.plantNumber = index;
    })
  }

  onClick() {
    this.store.dispatch(new PlantChangeAction(this.plantNumber + 1))
      .subscribe((data: {state: IState}) => {
      console.log(data);
      this.plantNumber = data.state.plantNumber;
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if (this.plantNumberSub) this.plantNumberSub.unsubscribe();
  }
}
