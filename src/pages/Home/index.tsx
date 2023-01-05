import { useCallback, useContext, useState } from 'react';
import { CyclesContext } from '@contexts/CyclesContext/CyclesContext';
import { IoMdAdd } from 'react-icons/io';
import { Header } from './components/Header';
import { Task } from './components/Task';
import { Timer } from './components/Timer';
import { HomeContainer, StartButton, TaskContainer, TimerContainer } from './styles';
import { TaskList } from './components/Task/styles';
import { current } from 'immer';

export type AppState = 'pomodoro' | 'shortBreak' | 'longBreak';

export interface ITask {
  id: string;
  name: string;
  startDate: Date;
  endDate: Date | null;
}

export function Home() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [nameTask, setNameTask] = useState<string>('');
  const [minutesAmount, setMinutesAmount] = useState<number>(5);
  const [appState, setAppState] = useState<AppState>('pomodoro');
  const { createNewCycle, activeCycle, interruptCurrentCycle } = useContext(CyclesContext);

  const changeAppState = useCallback((newState: AppState) => {
    setAppState(newState);
  }, []);

  function handleStartCycle() {
    createNewCycle({ task: '', minutesAmount, type: appState });
  }

  function handleAddTask() {
    setTasks((state) => [
      ...state,
      { id: new Date().getTime().toString(), name: nameTask, startDate: new Date(), endDate: null }
    ]);

    setNameTask('');
  }

  function handleStopCycle() {
    interruptCurrentCycle();
  }

  function removeTask(taskId: string) {
    setTasks((state) => state.filter((task) => taskId !== task.id));
  }

  function markTaskAsFinished(taskId: string) {
    const findIndex = tasks.findIndex((task) => task.id === taskId);
    if (findIndex !== -1) {
      let currentTasks = tasks;
      currentTasks[findIndex].endDate = new Date();
      setTasks([...currentTasks]);
    }
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
        <h2>Create new task</h2>

        <form action="">
          <input
            type="text"
            placeholder="Name Task"
            value={nameTask}
            onChange={(e) => setNameTask(e.target.value)}
          />
          <button type="button" onClick={handleAddTask}>
            <IoMdAdd />
          </button>
        </form>

        <TaskList>
          <h3>Tasks</h3>
          {tasks.map((task) => (
            <Task
              task={task}
              key={String(task.id)}
              markTaskAsFinished={markTaskAsFinished}
              removeTask={removeTask}
            />
          ))}
        </TaskList>
      </TaskContainer>
    </HomeContainer>
  );
}
