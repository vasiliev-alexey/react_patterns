import React, { CSSProperties } from 'react';
import { FixedSizeList } from 'react-window';
import faker from 'faker';

const bigList = [...Array(5000)].map(() => ({
  name: faker.name.findName(),
  email: faker.internet.email(),
  avatar: faker.internet.avatar(),
}));

const VirtListApp: React.FC = () => {
  // const renderItem = (item: UserProfile) => (
  //   <div style={{ display: 'flex' }}>
  //     <img src={item.avatar} alt={item.name} width={50} />
  //     <p>
  //       {item.name} — {item.email}
  //     </p>
  //   </div>
  // );
  // return <List data={bigList} renderItem={renderItem} />;

  const renderRow: React.FC<{ index: number; style: CSSProperties }> = ({
    index,
    style,
  }) => (
    <div style={{ ...style, ...{ display: 'flex' } }}>
      <img src={bigList[index].avatar} alt={bigList[index].name} width={50} />
      <p>
        {bigList[index].name} — {bigList[index].email}
      </p>
    </div>
  );
  return (
    <FixedSizeList
      height={window.innerHeight}
      width={window.innerWidth - 20}
      itemCount={bigList.length}
      itemSize={50}
    >
      {renderRow}
    </FixedSizeList>
  );
};

export default VirtListApp;
