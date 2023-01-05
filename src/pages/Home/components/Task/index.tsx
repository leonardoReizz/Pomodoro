import { ITask } from '../..';
import { TaskContainer } from './styles';
import { BsFillTrashFill, BsCheckLg } from 'react-icons/bs';

export interface TaskProps {
  task: ITask;
  removeTask: (taskId: string) => void;
  markTaskAsFinished: (taskId: string) => void;
}

export function Task({ task, removeTask, markTaskAsFinished }: TaskProps) {
  console.log(task);
  return (
    <TaskContainer>
      <h4 className={`${task.endDate !== null && 'finished'}`}>{task.name}</h4>
      <div className="actions">
        <button type="button" onClick={() => removeTask(task.id)}>
          <BsFillTrashFill />
        </button>
        <button type="button" onClick={() => markTaskAsFinished(task.id)}>
          <BsCheckLg />
        </button>
      </div>
    </TaskContainer>
  );
}
