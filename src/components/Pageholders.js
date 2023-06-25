import Pagination from 'react-bootstrap/Pagination';

function Pageholders({ setFirstGame, lastGameIndex  }) {

  let active = 1;
  let items = [];
  

  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} onClick={()=>{ number!==1? setFirstGame(9 * (number-1)) :setFirstGame(0); }} active={number === active} >
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