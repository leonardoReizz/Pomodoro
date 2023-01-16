import { Cycle } from '@reducers/cycles/reducer';
import { api } from '../../api';
import { ICreateHistoryData, IUpdateHistoryData } from './types';

async function getHistory(userId: string): Promise<Cycle[]> {
  return api
    .get(`/history/${userId}`)
    .then((result) => {
      return result.data.message;
    })
    .catch((error) => {
      console.log(error);
      return [];
    });
}

async function createHistory(newHistory: ICreateHistoryData) {
  api.post('/history', {
    id: newHistory.id,
    userId: newHistory.userId,
    minutesAmount: newHistory.minutesAmount,
    type: newHistory.type,
    startDate: newHistory.startDate
  });
}

async function updateHistory(newHistory: IUpdateHistoryData) {
  return api
    .put('/history', {
      id: newHistory.id,
      interruptedDate: newHistory.interruptedDate,
      finishedDate: newHistory.finishedDate
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
}

export default { getHistory, createHistory, updateHistory };
