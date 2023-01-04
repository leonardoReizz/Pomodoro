import { useCallback, useContext, useState } from 'react';
import { CyclesContext } from '../../contexts/CyclesContext';
import { Header } from './components/Header';
import { Task } from './components/Task';
import { Timer } from './components/Timer';
import { HomeContainer, StartButton, TaskContainer, TimerContainer } from './styles';

export type AppState = 'pomodoro' | 'shortBreak' | 'longBreak';

export interface ITask {
  id: string;
  name: string;
  state: 'added' | 'finished';
  startDate: Date;
  endDate: Date;
}

export function Home() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [minutesAmount, setMinutesAmount] = useState<number>(5);
  const [appState, setAppState] = useState<AppState>('pomodoro');
  const { createNewCycle, activeCycle, interruptCurrentCycle } = useContext(CyclesContext);

  const changeAppState = useCallback((newState: AppState) => {
    setAppState(newState);
  }, []);

  function handleStartCycle() {
    createNewCycle({ task: '', minutesAmount, type: appState });
  }

  function handleStopCycle() {
    interruptCurrentCycle();
  }

  return (
    <HomeContainer>
      <TimerContainer>
        <Header changeAppState={changeAppState} appState={appState} />
        <Timer appState={appState} />
        <StartButton onClick={!activeCycle ? handleStartCycle : handleStopCycle}>
          {!activeCycle ? 'START' : 'STOP'}
        </StartButton>
      </TimerContainer>

      <TaskContainer>
        <h3>Create new task</h3>

        <form action="">
          <input type="text" placeholder="Name Task" />
          <button>Add</button>
        </form>

        {tasks.map((task) => (
          <Task task={task} key={String(task.id)} />
        ))}
      </TaskContainer>
    </HomeContainer>
  );
}
