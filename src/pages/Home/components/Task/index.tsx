import { ITask } from '../..';

export interface TaskProps {
  task: ITask;
}

export function Task({ task }: TaskProps) {
  return <div> TASK</div>;
}
