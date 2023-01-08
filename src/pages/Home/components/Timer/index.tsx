import { useContext, useEffect, useState } from 'react';
import { differenceInSeconds } from 'date-fns';

import { CyclesContext } from '@contexts/CyclesContext/CyclesContext';
import { TimerContainer } from './styles';
import { AppState } from '../..';

interface TimerProps {
  appState: AppState;
}

export function Timer({ appState }: TimerProps) {
  const {
    activeCycle,
    activeCycleId,
    totalMinutesPomodoro,
    totalMinutesShortBreak,
    totalMinutesLongBreak,
    markCurrentCycleAsFinished,
    ammountSecondsPassed,
    setSecondsPassed,
    interruptCurrentCycle
  } = useContext(CyclesContext);

  const totalSeconds = activeCycle
    ? activeCycle.minutesAmount * 60
    : appState === 'pomodoro'
    ? totalMinutesPomodoro * 60
    : appState === 'shortBreak'
    ? totalMinutesShortBreak * 60
    : totalMinutesLongBreak * 60;
  const currentSeconds = activeCycle ? totalSeconds - ammountSecondsPassed : totalSeconds;
  const minutesAmountCycle = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;

  const minutes = String(minutesAmountCycle).padStart(2, '0');
  const seconds = String(secondsAmount).padStart(2, '0');

  useEffect(() => {
    if (activeCycle) {
      document.title = `Ignite Timer - ${minutes}:${seconds}`;
    }
  }, [minutes, seconds, activeCycle]);

  useEffect(() => {
    interruptCurrentCycle();
  }, [appState]);

  useEffect(() => {
    let interval: any;
    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(new Date(), new Date(activeCycle.startDate));

        if (secondsDifference >= totalSeconds) {
          markCurrentCycleAsFinished();
          setSecondsPassed(totalSeconds);
          clearInterval(interval);
        } else {
          setSecondsPassed(secondsDifference);
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [activeCycle, activeCycleId, totalSeconds, setSecondsPassed, markCurrentCycleAsFinished]);

  return (
    <TimerContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <span>:</span>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </TimerContainer>
  );
}
