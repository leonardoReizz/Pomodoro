import { produce } from 'immer';
import { AppState } from '../../pages/Home';

import { ActionTypes } from './actions';

export interface Cycle {
  id: string;
  minutesAmount: number;
  startDate: string;
  type: AppState;
  interruptedDate?: string;
  finishedDate?: string;
}

interface CyclesState {
  cycles: Cycle[];
  activeCycleId: string | null;
  totalMinutesPomodoro: number;
  totalMinutesShortBreak: number;
  totalMinutesLongBreak: number;
}

export function cyclesReducer(state: CyclesState, action: any) {
  switch (action.type) {
    case ActionTypes.CHANGE_TOTAL_MINUTES_POMODORO:
      return produce(state, (draft) => {
        draft.totalMinutesPomodoro = action.payload.minutes;
      });
    case ActionTypes.CHANGE_TOTAL_MINUTES_POMODORO_SHORT_BREAK:
      return produce(state, (draft) => {
        draft.totalMinutesShortBreak = action.payload.minutes;
      });
    case ActionTypes.CHANGE_TOTAL_MINUTES_POMODORO_LONG_BREAK:
      return produce(state, (draft) => {
        draft.totalMinutesLongBreak = action.payload.minutes;
      });
    case ActionTypes.ADD_NEW_CYCLE:
      return produce(state, (draft) => {
        draft.cycles.push(action.payload.newCycle);
        draft.activeCycleId = action.payload.newCycle.id;
      });
    case ActionTypes.INTERRUPT_CURRENT_CYCLE: {
      const currentCycleIndex = state.cycles.findIndex((cycle) => {
        return cycle.id === state.activeCycleId;
      });

      if (currentCycleIndex < 0) {
        return state;
      }
      return produce(state, (draft) => {
        //data alterada
        draft.cycles[currentCycleIndex].interruptedDate = action.payload.date;
        draft.activeCycleId = null;
      });
    }
    case ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED: {
      const currentCycleIndex = state.cycles.findIndex((cycle) => {
        return cycle.id === state.activeCycleId;
      });

      if (currentCycleIndex < 0) {
        return state;
      }
      return produce(state, (draft) => {
        //data alterada
        draft.cycles[currentCycleIndex].finishedDate = action.payload.date;
        draft.activeCycleId = null;
      });
    }
    default:
      return state;
  }
}
