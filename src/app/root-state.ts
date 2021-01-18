import {State, Action, StateContext, Selector} from '@ngxs/store';

export interface IState {
  plantNumber: number,
  jewelryNumber: number,
  countJewelries: number,
  paintNumber: number,
  countPaints: number
}
export class PlantChangeAction {
  plantNumber: number = 0;
  static readonly type='PlantChangeAction';
  constructor(plantNumber: number) {
    this.plantNumber = plantNumber;
  }
}
export class JewelryChangeAction {
  jewelryNumber: number = 0;
  static readonly type='JewelryChangeAction';
  constructor(jewelryNumber: number) {
    this.jewelryNumber = jewelryNumber;
  }
}
export class PaintChangeAction {
  paintNumber: number = 0;
  static readonly type='PaintChangeAction';
  constructor(paintNumber: number) {
    this.paintNumber = paintNumber;
  }
}

@State<IState>({
  name: 'state',
  defaults: {
    plantNumber: 0,
    jewelryNumber: 0,
    countJewelries: 18,
    paintNumber: 0,
    countPaints: 22
  }
})
export class RootState {
  @Selector()
  static getPlantChangeValue(state: IState) {
    return state.plantNumber;
  }
  @Selector()
  static getPaintChangeValue(state: IState) {
    return state.paintNumber;
  }
  @Selector()
  static getAllPaintCountValue(state: IState) {
    return state.countPaints;
  }
  @Selector()
  static getAllJewelryCountValue(state: IState) {
    return state.countJewelries;
  }
  @Selector()
  static getJewelryChangeValue(state: IState) {
    return state.jewelryNumber;
  }
  @Action(PaintChangeAction)
  public paintChangeValue(ctx: StateContext<IState>, new_paint: PaintChangeAction) {
    ctx.setState((state) => ({ ...state, paintNumber: new_paint.paintNumber }));
  }
  @Action(PlantChangeAction)
  public plantChangeValue(ctx: StateContext<IState>, new_plant: PlantChangeAction) {
    ctx.setState((state) => ({ ...state, plantNumber: new_plant.plantNumber }));
  }
  @Action(JewelryChangeAction)
  public jewelryChangeValue(ctx: StateContext<IState>, new_jewelry: JewelryChangeAction) {
    ctx.setState((state) => ({ ...state, jewelryNumber: new_jewelry.jewelryNumber }));
  }
}
