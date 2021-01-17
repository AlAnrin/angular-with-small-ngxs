import { State, Action } from '@ngxs/store';

export class Add {
  static readonly type = 'Add';
}

@State<number>({
  name: 'count',
  defaults: 0
})
export class RootState {
  @Action(Add)
  private add({getState, setState}: { getState: any; setState: any }) {
    const state = getState();
    setState(state + 1);
  }
}
