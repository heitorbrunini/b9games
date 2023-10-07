import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function Categorias({responseData, setResponseData}) {

  function whatDoClick(Categoria){
    console.log(Categoria);
  }
  
  var categorias = ['All games'];
  
  // Verifique se responseData é definido antes de acessar a propriedade 'array'
  if (responseData ) {
    
    responseData.forEach(element => {
      if (!categorias.includes(element.genre)) {
        
        categorias.push(element.genre);
      }
  
    });
    
  }

  let Buttons = [];

  categorias.forEach( (categoria) => {
      Buttons.push(
        <button class="btn btn-outline-success me-2" onClick={ () => whatDoClick( categoria )} type="button" style={{ width: '150px' }}>{categoria}</button>
      )
    }
  )


  return (
    <nav class="navbar"  data-bs-theme="dark">
      <form   class="container-fluid justify-content-start flex-nowrap">
        {Buttons}        
      </form>
    </nav>
  );
}

export default Categorias;
