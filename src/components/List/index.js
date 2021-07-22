import React from 'react';
import ListItem from '../ListItem';
import Div from '../Div';

function List({ items = [], type }) {
  return (
    <Div width="100%">
      {items.map(item => (
        <ListItem
          key={`post__${item.body}__user__${item.userId}`}
          itemData={item}
          type={type}
        />
      ))}
    </Div>
  );
}

export default List;
