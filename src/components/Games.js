import { Card, Stack, CardBody, CardFooter, Image, Heading, Text, Divider, Button, ButtonGroup, Tabs, TabList, Tab, TabIndicator } from '@chakra-ui/react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './games.css';
import api from '../services/api';
import React, { useState, useEffect } from 'react';

function Games() {

    const [responseData, setResponseData] = useState(null);

    useEffect(() => {
      api.get("", {
        headers: {
          'dev-email-address': 'heitor.brunini@gmail.com'
        }
      }).then(response => {
        setResponseData(response.data); // Atualiza o estado com a resposta da API
        console.log(responseData);
    }).catch(error => {
        console.error(error);
      });
    }, []);
    

    function adicionarCardGame(game) {
        const gamesArea = document.getElementById('game-area-cards');
        const divCardGame = document.createElement('div');

        divCardGame.className = 'col-md-4 card-game';

        // Conteúdo do card
        let cardContent = `
          <Card maxW='sm' bg="gray.800" color={"white"}>
            <CardBody>
                <Image
                    src='${game.thumbnail}'
                    alt='${game.title}'
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>${game.title}</Heading>
                    <Text>${game.short_description}</Text>
                    <Text color='green.300' fontSize='2xl'>${game.developer}</Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='green'>
                        <a href='${game.freetogame_profile_url}'>See More
                    </Button>
                    <Button variant='ghost' colorScheme='green'>
                        ${game.platform}
                    </Button>
                </ButtonGroup>
            </CardFooter>
          </Card>
        `;

        divCardGame.innerHTML = cardContent;
        gamesArea.appendChild(divCardGame);
    }

    return (
        <div id="game-area">

            <div class="container" id='game-area-cards'>
                <div class="row">
                    <div class="col-12">
                        <h3 id="main-title">Categorias
                        </h3>
                        <div id='game-tabs'>
                            <Tabs position="relative" variant="unstyled" defaultIndex={0}>
                                <TabList justifyContent="center" colorScheme="green">
                                    <Tab color="green.700"
                                        _active={{ color: "green.50" }}
                                        _focus={{ color: "green.50" }}
                                    >All Games</Tab>
                                    <Tab color="green.700"
                                        _active={{ color: "green.50" }}
                                        _focus={{ color: "green.50" }} >Shooter</Tab>
                                    <Tab color="green.700"
                                        _active={{ color: "green.50" }}
                                        _focus={{ color: "green.50" }} >RPG</Tab>
                                    <Tab color="green.700"
                                        _active={{ color: "green.50" }}
                                        _focus={{ color: "green.50" }}>Fighting</Tab>
                                    <Tab color="green.700"
                                        _active={{ color: "green.50" }}
                                        _focus={{ color: "green.50" }}>Battle Royale</Tab>
                                    <Tab color="green.700"
                                        _active={{ color: "green.50" }}
                                        _focus={{ color: "green.50" }} >MOBA</Tab>
                                    <Tab color="green.700"
                                        _active={{ color: "green.50" }}
                                        _focus={{ color: "green.50" }} >Strategy</Tab>
                                    <Tab color="green.700"
                                        _active={{ color: "green.50" }}
                                        _focus={{ color: "green.50" }} >MMO</Tab>
                                    <Tab color="green.700"
                                        _active={{ color: "green.50" }}
                                        _focus={{ color: "green.50" }}>Card Game</Tab>
                                    <Tab color="green.700"
                                        _active={{ color: "green.50" }}
                                        _focus={{ color: "green.50" }} >Racing</Tab>
                                    <Tab color="green.700"
                                        _active={{ color: "green.50" }}
                                        _focus={{ color: "green.50" }}>Fantasy</Tab>
                                    <Tab color="green.700"
                                        _active={{ color: "green.50" }}
                                        _focus={{ color: "green.50" }}>Social</Tab>
                                    <Tab color="green.700"
                                        _active={{ color: "green.50" }}
                                        _focus={{ color: "green.50" }} >Sports</Tab>

                                </TabList>
                                <TabIndicator
                                    mt="-1.5px"
                                    height="2px"
                                    bg="green.500"
                                    borderRadius="1px"
                                />
                            </Tabs>
                        </div>

                        <hr />
                    </div>

                    <div className="col-md-4 card-game">
                        <Card maxW='sm' bg="gray.800" color={"white"}>
                            <CardBody>
                                <Image
                                    src='https://www.freetogame.com/g/540/thumbnail.jpg'
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'>Overwatch 2</Heading>
                                    <Text>
                                        A hero-focused first-person team shooter from Blizzard Entertainment.
                                    </Text>
                                    <Text color='green.300' fontSize='2xl'>
                                        Blizzard Entertainment
                                    </Text>
                                </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter>
                                <ButtonGroup spacing='2'>
                                    <Button variant='solid' colorScheme='green'>
                                        See More
                                    </Button>
                                    <Button variant='ghost' colorScheme='green'>
                                        PC (Windows)
                                    </Button>
                                </ButtonGroup>
                            </CardFooter>
                        </Card>

                    </div>

                    <div className="col-md-4 card-game">
                        <Card maxW='sm' bg="gray.800" color={"white"}>
                            <CardBody>
                                <Image
                                    src='https://www.freetogame.com/g/540/thumbnail.jpg'
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'>Overwatch 2</Heading>
                                    <Text>
                                        A hero-focused first-person team shooter from Blizzard Entertainment.
                                    </Text>
                                    <Text color='green.300' fontSize='2xl'>
                                        Blizzard Entertainment
                                    </Text>
                                </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter>
                                <ButtonGroup spacing='2'>
                                    <Button variant='solid' colorScheme='green'>
                                        See More
                                    </Button>
                                    <Button variant='ghost' colorScheme='green'>
                                        PC (Windows)
                                    </Button>
                                </ButtonGroup>
                            </CardFooter>
                        </Card>

                    </div>

                    <div className="col-md-4 card-game">
                        <Card maxW='sm' bg="gray.800" color={"white"}>
                            <CardBody>
                                <Image
                                    src='https://www.freetogame.com/g/540/thumbnail.jpg'
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'>Overwatch 2</Heading>
                                    <Text>
                                        A hero-focused first-person team shooter from Blizzard Entertainment.
                                    </Text>
                                    <Text color='green.300' fontSize='2xl'>
                                        Blizzard Entertainment
                                    </Text>
                                </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter>
                                <ButtonGroup spacing='2'>
                                    <Button variant='solid' colorScheme='green'>
                                        See More
                                    </Button>
                                    <Button variant='ghost' colorScheme='green'>
                                        PC (Windows)
                                    </Button>
                                </ButtonGroup>
                            </CardFooter>
                        </Card>

                    </div>

                    <div className="col-md-4 card-game">
                        <Card maxW='sm' bg="gray.800" color={"white"}>
                            <CardBody>
                                <Image
                                    src='https://www.freetogame.com/g/540/thumbnail.jpg'
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'>Overwatch 2</Heading>
                                    <Text>
                                        A hero-focused first-person team shooter from Blizzard Entertainment.
                                    </Text>
                                    <Text color='green.300' fontSize='2xl'>
                                        Blizzard Entertainment
                                    </Text>
                                </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter>
                                <ButtonGroup spacing='2'>
                                    <Button variant='solid' colorScheme='green'>
                                        See More
                                    </Button>
                                    <Button variant='ghost' colorScheme='green'>
                                        PC (Windows)
                                    </Button>
                                </ButtonGroup>
                            </CardFooter>
                        </Card>

                    </div>

                    <div className="col-md-4 card-game">
                        <Card maxW='sm' bg="gray.800" color={"white"}>
                            <CardBody>
                                <Image
                                    src='https://www.freetogame.com/g/540/thumbnail.jpg'
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'>Overwatch 2</Heading>
                                    <Text>
                                        A hero-focused first-person team shooter from Blizzard Entertainment.
                                    </Text>
                                    <Text color='green.300' fontSize='2xl'>
                                        Blizzard Entertainment
                                    </Text>
                                </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter>
                                <ButtonGroup spacing='2'>
                                    <Button variant='solid' colorScheme='green'>
                                        See More
                                    </Button>
                                    <Button variant='ghost' colorScheme='green'>
                                        PC (Windows)
                                    </Button>
                                </ButtonGroup>
                            </CardFooter>
                        </Card>

                    </div>

                    <div className="col-md-4 card-game">
                        <Card maxW='sm' bg="gray.800" color={"white"}>
                            <CardBody>
                                <Image
                                    src='https://www.freetogame.com/g/540/thumbnail.jpg'
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'>Overwatch 2</Heading>
                                    <Text>
                                        A hero-focused first-person team shooter from Blizzard Entertainment.
                                    </Text>
                                    <Text color='green.300' fontSize='2xl'>
                                        Blizzard Entertainment
                                    </Text>
                                </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter>
                                <ButtonGroup spacing='2'>
                                    <Button variant='solid' colorScheme='green'>
                                        See More
                                    </Button>
                                    <Button variant='ghost' colorScheme='green'>
                                        PC (Windows)
                                    </Button>
                                </ButtonGroup>
                            </CardFooter>
                        </Card>

                    </div>


                </div>
            </div>

        </div>
    )
}

export default Games;