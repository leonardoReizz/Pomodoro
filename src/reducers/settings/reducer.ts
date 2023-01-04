import produce from 'immer';
import { ActionTypes } from './actions';

export interface ISettings {
  timePomodoro: number;
}

export function settingsReducer(state: ISettings, action: any) {
  switch (action.type) {
    case ActionTypes.CHANGE_TIME_POMODORO:
      return produce(state, (draft) => {
        draft.timePomodoro = action.payload.newTime;
      });
    default:
      return state;
  }
}
