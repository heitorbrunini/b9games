import { Stack, Button } from '@chakra-ui/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function Categorias({ Genres , setGenres }) {
  let buttons = [];
  let filter = [];

  const handleButtonClick = (genre) => {
    if (filter.length <= 3) {
      if (filter.includes(genre)) {
        filter = filter.filter((value) => value !== genre);
        
      } else if (filter.length < 3) {
        filter.push(genre);
        console.log(filter);
      }
    }
    
    
  };

  Genres.forEach((genre) => {
    buttons.push(
      <Button
        key={genre}
        colorScheme="green"
        onClick={() => handleButtonClick(genre)}
        variant={filter.includes(genre) ? 'solid' : 'outline'}
      >
        {genre}
      </Button>
    );
  });

  return (
    <Stack direction="row" spacing={4} align="center">
      {buttons}
    </Stack>
  );
}

export default Categorias;
