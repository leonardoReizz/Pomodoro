import { formatRelative, subDays } from 'date-fns';
import { useEffect, useState } from 'react';
import { HistoryContainer, HistoryTable, Status } from './style';
import apiHistory from '@services/http/history/index';
import { useUser } from '../../hooks/useUser/useUser';
import { Cycle } from '@reducers/cycles/reducer';
import { parseISO } from 'date-fns/esm';

export function History() {
  const [cycles, setCycles] = useState<Cycle[]>([]);
  const { user } = useUser();

  useEffect(() => {
    async function list() {
      if (user?.id) {
        const history = await apiHistory.getHistory(user.id);
        setCycles(history);
      }
    }

    list();
  }, []);

  function formatDate(date: string) {
    const format = formatRelative(subDays(parseISO(date), 3), new Date());
    console.log(format);

    return format;
  }

  return (
    <HistoryContainer>
      <HistoryTable>
        <table>
          <thead>
            <tr>
              <th>Duration</th>
              <th>Type</th>
              <th>Started</th>
              <th>Finish</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.minutesAmount} minutes</td>
                  <td>{cycle.type}</td>
                  <td>{formatDate(cycle.startDate)}</td>
                  <td>
                    {cycle?.finishedDate !== undefined &&
                      cycle?.finishedDate !== '' &&
                      formatDate(cycle.finishedDate)}

                    {cycle?.interruptedDate !== undefined &&
                      cycle?.interruptedDate !== '' &&
                      formatDate(cycle.interruptedDate)}
                  </td>
                  <td>
                    {cycle.finishedDate && <Status statusColor="green">Concluded</Status>}
                    {cycle.interruptedDate && <Status statusColor="red">Interrupted</Status>}
                    {!cycle.finishedDate && !cycle.interruptedDate && (
                      <Status statusColor="yellow">In progress</Status>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </HistoryTable>
    </HistoryContainer>
  );
}
