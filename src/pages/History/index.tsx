import { CyclesContext } from '@contexts/CyclesContext/CyclesContext';
import { formatDistanceToNow } from 'date-fns';
import { useContext } from 'react';
import enUs from 'date-fns/locale/en-US';
import { HistoryContainer, HistoryTable, Status } from './style';

export function History() {
  const { cycles } = useContext(CyclesContext);

  return (
    <HistoryContainer>
      <HistoryTable>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Started</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount} minutes</td>
                  <td>
                    {formatDistanceToNow(new Date(cycle.startDate), {
                      addSuffix: true,
                      locale: enUs
                    })}
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
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount} minutes</td>
                  <td>
                    {formatDistanceToNow(new Date(cycle.startDate), {
                      addSuffix: true,
                      locale: enUs
                    })}
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
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount} minutes</td>
                  <td>
                    {formatDistanceToNow(new Date(cycle.startDate), {
                      addSuffix: true,
                      locale: enUs
                    })}
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
