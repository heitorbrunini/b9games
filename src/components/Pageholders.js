import Pagination from 'react-bootstrap/Pagination';
import React, { useState } from 'react';

function Pageholders({ setFirstGame }) {

  let [active, SetActive] = useState(1);
  let items = [];
  
  const handlePaginationItemClick = (number) => {
    SetActive(number);
    if (number !== 1) {
      setFirstGame(9 * (number - 1));
    } else {
      setFirstGame(0);
    }
    window.scrollBy(0, -1600); // Scroll de 400px para cima
  };

  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} onClick={() => handlePaginationItemClick(number)} active={number === active} >
        {number}
      </Pagination.Item>,
    );
  }

  return (
    <div data-bs-theme="dark">
      <Pagination size="lg">{items}</Pagination>
    </div>
  )
}

export default Pageholders;
