import { List } from 'modules/components/List/List';
import { Wrapper, listCreatedGamesCss } from './ListCreatedGames.styled';
import { useAppSelector } from 'store';
import { gameSelector, userSelector } from 'store/selectors';
import { Room } from 'store/reducers/gameSlice';
import { RoomItem } from '../Room/Room';
import { useEffect, useState } from 'react';

export const ListCreatedGames = () => {
  const [sortRooms, setSortRooms] = useState<Room[]>([]);

  const {
    gameInfo: { rooms },
  } = useAppSelector(gameSelector);
  const { currentUser } = useAppSelector(userSelector);

  useEffect(() => {
    if (currentUser === null || rooms.length === 0) {
      return;
    }

    const newRooms = rooms.slice(0);
    newRooms.sort((a, b) => (a.user1_id === currentUser ? -1 : b.user2_id === currentUser ? 1 : 0));
    setSortRooms(newRooms);
  }, [currentUser, rooms]);

  const renderItem = (item: Room) => <RoomItem key={item.id} {...item} />;

  const renderEmpty = <></>;

  return (
    <Wrapper>
      <List
        data={currentUser === null ? rooms : sortRooms}
        renderItem={renderItem}
        renderEmpty={renderEmpty}
        styles={listCreatedGamesCss}
      />
    </Wrapper>
  );
};
