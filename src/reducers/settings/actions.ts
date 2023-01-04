export enum ActionTypes {
  CHANGE_TIME_POMODORO = 'CHANGE_TIME_POMODORO'
}

export function changeTimerPromodoroAction(newTime: number) {
  return {
    type: ActionTypes.CHANGE_TIME_POMODORO,
    payload: {
      newTime
    }
  };
}
