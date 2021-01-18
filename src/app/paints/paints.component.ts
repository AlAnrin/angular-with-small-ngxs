import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngxs/store";
import {Observable, Subscription} from "rxjs";
import {IState, PaintChangeAction, RootState} from "../root-state";
import { trigger, style, animate, transition, state } from '@angular/animations';

@Component({
  selector: 'app-paints',
  templateUrl: './paints.component.html',
  styleUrls: ['./paints.component.scss']
})
export class PaintsComponent implements OnInit, OnDestroy {
  countAllPaints: number = 0;
  paints: any;
  countAllPaintsSub: Subscription;
  paintNumber$: Observable<any>;
  paintNumber: number = 0;
  paintNumberSub: Subscription;

  constructor(private store: Store) {
    this.paintNumber$ = this.store.select(RootState.getPaintChangeValue);
    this.paintNumberSub = this.paintNumber$.subscribe(index => {
      this.paintNumber = index;
    });

    this.countAllPaintsSub = this.store.select(RootState.getAllPaintCountValue)
      .subscribe(data => {
        this.countAllPaints = data;
        this.paints = new Array(this.countAllPaints + 1);
      });
  }

  canClick(isIncrement: boolean): boolean {
    return isIncrement ? this.paintNumber >= this.countAllPaints : this.paintNumber === 0;
  }

  onClick(isIncrement: boolean) {
    this.store.dispatch(
      new PaintChangeAction(isIncrement ? this.paintNumber + 1 : this.paintNumber - 1))
      .subscribe((data: {state: IState}) => {
        this.paintNumber = data.state.paintNumber;
      });
  }

  getImageSrc(index: number) {
    return `assets/paints/${index}.jpg`
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if (this.paintNumberSub) this.paintNumberSub.unsubscribe();
  }
}

