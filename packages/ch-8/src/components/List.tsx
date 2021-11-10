import React from 'react';

export interface UserProfile {
  name: string;
  email: string;
  avatar: string;
}

export interface ListProps {
  data: UserProfile[];
  renderItem: React.FC<UserProfile>;
  renderEmpty?: React.ReactElement;
}

const List: React.FC<ListProps> = ({ data = [], renderItem, renderEmpty }) => {
  return !data.length ? (
    renderEmpty
  ) : (
    <ul>
      {data.map((item, i) => (
        <li key={i}>{renderItem(item)}</li>
      ))}
    </ul>
  );
};

export default List;
