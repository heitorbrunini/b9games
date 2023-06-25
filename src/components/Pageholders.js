import Pagination from 'react-bootstrap/Pagination';

function Pageholders({ Action }) {

  let active = 1;
  let items = [];

  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item onClick={Action} key={number} active={number === active} >
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