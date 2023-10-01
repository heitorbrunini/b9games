import { Spinner } from '@chakra-ui/react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './games.css';
import api from '../services/api';
import React, { useState, useEffect } from 'react';
import CardGame from "./CardGame";
import Pageholders from "./Pageholders";
import Categorias from './Categorias';

function Games() {

    const [responseData, setResponseData] = useState(null);
    const [hideload, SetHideLoad] = useState("visible");
    const [Error, SetError] = useState(null);

    
    useEffect(() => {
        api.get("", {
            headers: {
                'X-RapidAPI-Key': 'eeb484ed46mshbe7288b63230bd5p1924efjsn40f4117eb1d0',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            },
            timeout: 5000
        }).then(response => {
            setResponseData(response.data); // Atualiza o estado com a resposta da API
        }).catch(error => {
            SetError(error);
        }).finally(() => {
            SetHideLoad("hidden");
        });

    }, [responseData]);

    const [number, setNumber] = useState(0);
    let count = number + 9;
    let items = [];
    let genres = [];

    if (responseData !== null) {
        responseData.slice(number, count).forEach(Game => {
            items.push(<CardGame game={Game} />);
            genres.push(Game.genre);
        })
    }

    function component(Error, items) {

        if (Error) {

            try {
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
            } catch (e) {
                return "O servidor demorou para responder, tente mais tarde"
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
                        <div id='game-tabs' class="overflow-auto">
                            <Categorias responseData={responseData} setResponseData={setResponseData}/>
                        </div>

                        <hr />
                        <Spinner visibility={hideload} color='green.300' size='xl' />
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