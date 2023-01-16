import { CreateCycleData, CyclesContext } from '@contexts/CyclesContext/CyclesContext';
import { useContext } from 'react';
import apiHistory from '@services/http/history/index';
import { useUser } from '../useUser/useUser';

export function useCycles() {
  const cyclesContext = useContext(CyclesContext);
  const { user } = useUser();

  async function markCurrentCycleAsFinished() {
    const date = new Date();
    if (cyclesContext.activeCycleId) {
      const updateApi = await apiHistory.updateHistory({
        id: cyclesContext.activeCycleId,
        finishedDate: date
      });
      cyclesContext.interruptCurrentCycle(date);
    }
  }

  async function interruptCurrentCycle() {
    const date = new Date();
    if (cyclesContext.activeCycleId) {
      const updateApi = await apiHistory.updateHistory({
        id: cyclesContext.activeCycleId,
        interruptedDate: date
      });
      cyclesContext.interruptCurrentCycle(date);
    }
  }

  async function createNewCycle({ minutesAmount, type }: CreateCycleData) {
    console.log(user);
    const newCycle = cyclesContext.createNewCycle({ minutesAmount, type });
    if (user?.id) {
      await apiHistory.createHistory({ ...newCycle, userId: user.id });
    }
  }

  return { ...cyclesContext, createNewCycle, interruptCurrentCycle, markCurrentCycleAsFinished };
}
