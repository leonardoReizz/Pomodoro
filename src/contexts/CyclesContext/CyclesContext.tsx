import { differenceInSeconds } from 'date-fns';
import { createContext, ReactNode, useEffect, useReducer, useState } from 'react';
import { AppState } from '@pages/Home';
import {
  addNewCycleAction,
  changeTotalMinutesLongBreakAction,
  changeTotalMinutesPomodoroAction,
  changeTotalMinutesShortBreakAction,
  markCurrentCycleAsFinishedAction
} from '@reducers/cycles/actions';
import { Cycle, cyclesReducer } from '@reducers/cycles/reducer';

interface CreateCycleData {
  task: string;
  minutesAmount: number;
  type: AppState;
}

interface CyclesContextType {
  cycles: Cycle[];
  totalMinutesPomodoro: number;
  totalMinutesShortBreak: number;
  totalMinutesLongBreak: number;
  activeCycle: Cycle | undefined;
  activeCycleId: string | null;
  ammountSecondsPassed: number;
  changeTotalMinutesPomodoro: (minutes: number) => void;
  changeTotalMinutesShortBreak: (minutes: number) => void;
  changeTotalMinutesLongBreak: (minutes: number) => void;
  interruptCurrentCycle: () => void;
  markCurrentCycleAsFinished: () => void;
  setSecondsPassed: (seconds: number) => void;
  createNewCycle: (data: CreateCycleData) => void;
}

export const CyclesContext = createContext({} as CyclesContextType);

interface CyclesContextProviderProps {
  children: ReactNode;
}

export function CyclesContextProvider({ children }: CyclesContextProviderProps) {
  const [cyclesState, dispatch] = useReducer(
    cyclesReducer,
    {
      cycles: [],
      totalMinutesPomodoro: 5,
      totalMinutesShortBreak: 5,
      totalMinutesLongBreak: 5,
      activeCycleId: null
    },
    () => {
      const storedStateAsJSON = localStorage.getItem('@timer:cycles-state');
      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      } else {
        return {
          cycles: [],
          totalMinutesPomodoro: 5,
          totalMinutesShortBreak: 5,
          totalMinutesLongBreak: 5,
          activeCycleId: null
        };
      }
    }
  );

  const {
    cycles,
    activeCycleId,
    totalMinutesPomodoro,
    totalMinutesShortBreak,
    totalMinutesLongBreak
  } = cyclesState;
  const activeCycle = cycles.find((cycle: Cycle) => cycle.id === activeCycleId);

  const [ammountSecondsPassed, setAmountSecondsPassed] = useState<number>(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate));
    }

    return 0;
  });

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState);

    localStorage.setItem('@timer:cycles-state', stateJSON);
  }, [cyclesState]);

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds);
  }

  function markCurrentCycleAsFinished() {
    dispatch(markCurrentCycleAsFinishedAction());
  }

  function changeTotalMinutesPomodoro(minutes: number) {
    dispatch(changeTotalMinutesPomodoroAction(minutes));
  }

  function changeTotalMinutesShortBreak(minutes: number) {
    dispatch(changeTotalMinutesShortBreakAction(minutes));
  }

  function changeTotalMinutesLongBreak(minutes: number) {
    dispatch(changeTotalMinutesLongBreakAction(minutes));
  }

  function createNewCycle(data: CreateCycleData) {
    const id = String(new Date().getTime());
    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      type: data.type,
      startDate: new Date()
    };

    dispatch(addNewCycleAction(newCycle));
    setAmountSecondsPassed(0);
  }

  function interruptCurrentCycle() {
    dispatch({
      type: 'INTERRUPT_CURRENT_CYCLE',
      payload: {
        activeCycleId
      }
    });
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        markCurrentCycleAsFinished,
        ammountSecondsPassed,
        changeTotalMinutesPomodoro,
        totalMinutesPomodoro,
        totalMinutesShortBreak,
        totalMinutesLongBreak,
        changeTotalMinutesShortBreak,
        changeTotalMinutesLongBreak,
        setSecondsPassed,
        createNewCycle,
        interruptCurrentCycle
      }}>
      {children}
    </CyclesContext.Provider>
  );
}
