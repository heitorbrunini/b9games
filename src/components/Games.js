import { Card, Stack, CardBody, CardFooter, Image, Heading, Text, Divider, Button, ButtonGroup, Tabs, TabList, Tab, TabIndicator, PinInput, PinInputField } from '@chakra-ui/react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './games.css'

function Games() {
    return (
        <div id="game-area">

            <div className="container">
                <div className="row">
                    <div className="col-12">
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

                <div id='input-fild'>
                    <PinInput color={"white"} defaultValue='123'>
                        <PinInputField  />
                        <PinInputField marginLeft={'7px'} />
                        <PinInputField marginLeft={'7px'} />
                    </PinInput>
                </div>



            </div>
        </div>
    )
}

export default Games;