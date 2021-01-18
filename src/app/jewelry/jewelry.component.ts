import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {Store} from "@ngxs/store";
import {IState, JewelryChangeAction, RootState} from "../root-state";

@Component({
  selector: 'app-jewelry',
  templateUrl: './jewelry.component.html',
  styleUrls: ['./jewelry.component.scss']
})
export class JewelryComponent implements OnInit, OnDestroy {
  countAllJewelry: number = 0;
  jewelries: any;
  countAllJewelrySub: Subscription;
  jewelryNumber$: Observable<any>;
  jewelryNumber: number = 0;
  jewelryNumberSub: Subscription;

  constructor(private store: Store) {
    this.jewelryNumber$ = this.store.select(RootState.getJewelryChangeValue);
    this.jewelryNumberSub = this.jewelryNumber$.subscribe(index => {
      this.jewelryNumber = index;
    });

    this.countAllJewelrySub = this.store.select(RootState.getAllJewelryCountValue)
      .subscribe(data => {
        this.countAllJewelry = data;
        this.jewelries = new Array(this.countAllJewelry);
      });
  }

  canClick(isIncrement: boolean): boolean {
    return isIncrement ? this.jewelryNumber >= this.countAllJewelry - 1 : this.jewelryNumber === 0;
  }

  onClick(isIncrement: boolean) {
    this.store.dispatch(
      new JewelryChangeAction(isIncrement ? this.jewelryNumber + 1 : this.jewelryNumber - 1))
      .subscribe((data: {state: IState}) => {
        this.jewelryNumber = data.state.jewelryNumber;
      });
  }

  getImageSrc(index: number) {
    return `assets/jewelry/jew(${index + 1}).jpg`
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if (this.jewelryNumberSub) this.jewelryNumberSub.unsubscribe();
  }
}

