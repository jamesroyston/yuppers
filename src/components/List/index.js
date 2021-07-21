import React from 'react';
import styled from 'styled-components';
import ListItem from '../ListItem';
import Div from '../Div';

function List({ items = [], type }) {
  return (
    <Div>
      {items.map(item => (
        <ListItem itemData={item} type={type} />
      ))}
    </Div>
  );
}

export default List;
