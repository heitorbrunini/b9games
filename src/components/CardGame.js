import { Card, Stack, CardBody, CardFooter, Image, Heading, Text, Divider, Button, ButtonGroup} from '@chakra-ui/react';

function CardGame({game}) {
    console.log(game);
    return (
        <div className="col-md-4 card-game">
            <Card maxW='sm' bg="gray.800" color={"white"}>
                <CardBody>
                    <Image
                        src={game.thumbnail}
                        alt='Green double couch with wooden legs'
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