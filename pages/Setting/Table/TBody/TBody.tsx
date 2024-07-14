interface TBodyProps<T> {
  data: T[];
  renderItem: (item: T, i: number) => JSX.Element;
}

export const TBody = <T,>({ data, renderItem }: TBodyProps<T>) => (
  <tbody>{data.map((item, i) => renderItem(item, i))}</tbody>
);
