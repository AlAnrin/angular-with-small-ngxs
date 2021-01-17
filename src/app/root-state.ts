import {State, Action, StateContext, Selector} from '@ngxs/store';

export interface IState {
  plantNumber: number,
  jewelryNumber: number,
  paintNumber: number
}
export class PlantChangeAction {
  static readonly type='PlantChangeAction';
}
export class JewelryChangeAction {
  static readonly type='JewelryChangeAction';
}
export class PaintChangeAction {
  static readonly type='PaintChangeAction';
}

@State<IState>({
  name: 'state',
  defaults: {
    plantNumber: 0,
    jewelryNumber: 0,
    paintNumber: 0
  }
})
export class RootState {
  @Selector()
  static getPlantChangeValue(state: IState) {
    return state.plantNumber;
  }
  @Action(PaintChangeAction)
  public paintChangeValue(ctx: StateContext<IState>) {
    ctx.setState((state) => ({ ...state, paintNumber: state.paintNumber + 1 }));
  }
  @Action(PlantChangeAction)
  public plantChangeValue(ctx: StateContext<IState>) {
    ctx.setState((state) => ({ ...state, plantNumber: state.plantNumber + 1 }));
  }
  @Action(JewelryChangeAction)
  public jewelryChangeValue(ctx: StateContext<IState>) {
    ctx.setState((state) => ({ ...state, jewelryNumber: state.jewelryNumber + 1 }));
  }
}
