import { THead } from './THead/THead';
import { TBody } from './TBody/TBody';
import { StyledTable } from './Table.styled';

interface TableProps<T> {
  data: T[];
  headData: string[];
  renderItem: (item: T, i: number) => JSX.Element;
  renderEmpty?: JSX.Element;
}

export const Table = <T,>({ data, headData, renderItem, renderEmpty = <></> }: TableProps<T>) => {
  if (!data.length) return renderEmpty;

  return (
    <StyledTable count={headData.length}>
      <THead data={headData} />
      <TBody data={data} renderItem={renderItem} />
    </StyledTable>
  );
};
