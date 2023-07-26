import Pagination from 'react-bootstrap/Pagination';
import React, { useState } from 'react';

function Pageholders({ setFirstGame }) {
  const pageSize = 9;
  const [active, setActive] = useState(1);

  const handlePaginationItemClick = (number) => {
    setActive(number);
    if (number !== 1) {
      setFirstGame(pageSize * (number - 1));
    } else {
      setFirstGame(0);
    }
    window.scrollBy(0, -400); // Scroll de 400px para cima
  };

  const items = [];

  // Lógica para criar os números de página
  for (let number = active; number < active + 5; number++) {
    items.push(
      <Pagination.Item key={number} onClick={() => handlePaginationItemClick(number)} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div data-bs-theme="dark">
      <Pagination size="lg">{items}</Pagination>
    </div>
  );
}

export default Pageholders;
