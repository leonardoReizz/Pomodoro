import { Cycle } from './reducer';

export enum ActionTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
  MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED',
  CHANGE_TOTAL_MINUTES_POMODORO = 'CHANGE_TOTAL_MINUTES_POMODORO',
  CHANGE_TOTAL_MINUTES_POMODORO_SHORT_BREAK = 'CHANGE_TOTAL_MINUTES_POMODORO_SHORT_BREAK',
  CHANGE_TOTAL_MINUTES_POMODORO_LONG_BREAK = 'CHANGE_TOTAL_MINUTES_POMODORO_LONG_BREAK'
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle
    }
  };
}

export function markCurrentCycleAsFinishedAction(date: Date) {
  return {
    type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
    payload: {
      date
    }
  };
}

export function interruptCurrentCycleAction(date: Date) {
  return {
    type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
    payload: {
      date
    }
  };
}

export function changeTotalMinutesPomodoroAction(minutes: number) {
  return {
    type: ActionTypes.CHANGE_TOTAL_MINUTES_POMODORO,
    payload: {
      minutes
    }
  };
}

export function changeTotalMinutesShortBreakAction(minutes: number) {
  return {
    type: ActionTypes.CHANGE_TOTAL_MINUTES_POMODORO_SHORT_BREAK,
    payload: {
      minutes
    }
  };
}

export function changeTotalMinutesLongBreakAction(minutes: number) {
  return {
    type: ActionTypes.CHANGE_TOTAL_MINUTES_POMODORO_LONG_BREAK,
    payload: {
      minutes
    }
  };
}
