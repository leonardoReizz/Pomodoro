export interface ICreateHistoryData {
  id: string;
  userId: string;
  minutesAmount: number;
  type: string;
  startDate: Date;
}

export interface IUpdateHistoryData {
  id: string;
  interruptedDate?: Date;
  finishedDate?: Date;
}
