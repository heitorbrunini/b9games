import { useEffect, useState } from 'react';
import { Card, Stack, CardBody, CardFooter, Image, Heading, Text, Divider, Button, ButtonGroup } from '@chakra-ui/react';

function CardGame({ game }) {
    const [colClass, setColClass] = useState('col-md-4');

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1000) {
                setColClass('col-md-6');
            } else if(window.innerWidth < 780){
                setColClass('col-md-12');
            } else {
                setColClass('col-md-4');
            }
        };

        handleResize(); // Chamada inicial para definir a classe com base no tamanho inicial da janela

        window.addEventListener('resize', handleResize); // Adiciona um listener para o evento de redimensionamento da janela

        return () => {
            window.removeEventListener('resize', handleResize); // Remove o listener quando o componente é desmontado
        };
    }, []);

    return (
        <div className={colClass + ' card-game'}>
            <Card maxW='sm' height={"600px"} bg="gray.800" color={"white"} >
                <CardBody>
                    <Image
                        src={game.thumbnail}
                        alt={game.title}
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{game.title}</Heading>
                        <Text>
                            {game.short_description}
                        </Text>
                        <Text color='green.300' fontSize='2xl'>
                            {game.developer}
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='green'>
                            <a href={game.game_url}>See More</a>
                        </Button>
                        <Button variant='ghost' colorScheme='green'>
                            {game.platform}
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>

        </div>
    )
}

export default CardGame;