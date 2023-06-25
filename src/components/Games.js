import { Tabs, TabList, Tab, TabIndicator,CircularProgress} from '@chakra-ui/react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './games.css';
import api from '../services/api';
import React, { useState, useEffect } from 'react';
import CardGame from "./CardGame";
import Pageholders from "./Pageholders";

function Games() {

    const [responseData, setResponseData] = useState(null);
    const [hideload,SetHideLoad]= useState("visible");

    useEffect(() => {
        api.get("", {
            headers: {
                'dev-email-address': 'heitor.brunini@gmail.com'
            }
        }).then(response => {
            setResponseData(response.data); // Atualiza o estado com a resposta da API
            SetHideLoad("hidden");
        }).catch(error => {
            console.error(error);
        });
    }, []);

    
    const [number, setNumber] = useState(0);
    let count = number + 9 ;
    let items = [];

    responseData !== null ? responseData.slice(number,count).forEach(Game => { items.push(<CardGame game={Game} />)  } ) : console.log("resposta vazia");


    return (
        <div id="game-area">

            <div class="container" id='game-area-cards'>
                <div class="row">
                    <div class="col-12">
                        <h3 id="main-title">Categorias
                        </h3>
                        <div id='game-tabs' class="overflow-auto">
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
                        <CircularProgress visibility={hideload} isIndeterminate color='green.300' />
                    </div>
                  
                    {items}

                    <div class="col-12 d-flex justify-content-center align-items-center" id='pageh'>
                        <Pageholders setFirstGame= {setNumber} lastGameIndex ={count}/>
                    </div>

                </div>


            </div>

        </div>
    )
}

export default Games;