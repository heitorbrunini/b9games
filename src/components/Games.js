import { Tabs, TabList, Tab, TabIndicator, CircularProgress } from '@chakra-ui/react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './games.css';
import api from '../services/api';
import React, { useState, useEffect } from 'react';
import CardGame from "./CardGame";
import Pageholders from "./Pageholders";

function Games() {

    const [responseData, setResponseData] = useState(null);
    const [hideload, SetHideLoad] = useState("visible");
    const [Error, SetError] = useState(null);


    useEffect(() => {
        api.get("", {
            headers: {
                'dev-email-address': 'heitor.brunini@gmail.com'
            },
            timeout: 5000
        }).then(response => {
            setResponseData(response.data); // Atualiza o estado com a resposta da API
        }).catch(error => {
            SetError(error);
        }).finally(()=>{
            SetHideLoad("hidden");
        });

    }, []);


    const [number, setNumber] = useState(0);
    let count = number + 9;
    let items = [];

    responseData !== null ? responseData.slice(number, count).forEach(Game => { items.push(<CardGame game={Game} />) }) : console.log("resposta vazia");

    function component(Error, items) {

        if (Error) {

            if (Error.message === "Timeout of 5000ms exceeded"){
                return "O servidor demorou para responder, tente mais tarde"
            }

            switch (Error.response.status) {
                case 500:
                case 502:
                case 503:
                case 504:
                case 507:
                case 508:
                case 509:

                    return "O servidor falhou em responder, tente recarregar a página";
                default:
                    return "O servidor não conseguirá responder por agora, tente voltar novamente mais tarde";
            }
        } else {
            return items;
        }
    }

    return (
        <div id="game-area">

            <div class="container" id='game-area-cards'>
                <div class="row">
                    <div class="col-12">
                        <h3 id="main-title">Categorias
                        </h3>
                        <div id='game-tabs' style={{ maxWidth: "100%", overflowX: "auto" }}>
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

                    {component(Error, items)}

                    <div class="col-12 d-flex justify-content-center align-items-center" id='pageh'>
                        <Pageholders setFirstGame={setNumber} />
                    </div>

                </div>


            </div>

        </div>
    )
}

export default Games;