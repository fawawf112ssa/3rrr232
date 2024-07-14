import { ChangeEvent, useState } from 'react';

import { Table } from 'modules/components/Table/Table';
import { Button, Form, FormTitle, Input, InputWrap, Main } from '../Admin.styled';
import { IOtherTBody, otherTBody, otherTHead } from 'data/adminPanel';
import { Pagination } from 'modules/components/Pagination/Pagination';

export const LongAdminPanel = () => {
  const [page, setPage] = useState(1);

  const handleChangePage = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const renderBodyItem = (item: IOtherTBody) => (
    <>
      <td>{item.gameId}</td>
      <td>{item.gameBank}</td>
      <td>{item.date}</td>
      <td>{item.result}</td>
      <td>
        <span className={item.profits ? 'green' : ''}>{item.profits}</span>
      </td>
    </>
  );

  const renderHeadItem = (item: string) => (
    <>
      <p>{item}</p>
    </>
  );

  const renderEmpty = <></>;
  return (
    <Main extended>
      <Form>
        <FormTitle>AMOUNT</FormTitle>
        <InputWrap>
          <Input placeholder="Enter amount" />
          <Button>confirm</Button>
        </InputWrap>
      </Form>
      <Table
        headData={otherTHead}
        bodyData={otherTBody}
        renderBodyItem={renderBodyItem}
        renderHeadItem={renderHeadItem}
        renderEmpty={renderEmpty}
      />
      <Pagination count={10} page={page} onChange={handleChangePage} />
    </Main>
  );
};

export default LongAdminPanel;
