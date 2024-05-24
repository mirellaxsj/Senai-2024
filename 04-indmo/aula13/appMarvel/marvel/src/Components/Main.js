import React, {useState, useEffect} from "react";
import {Card} from "./Card";
import axios from "axios";

const BASE_URL = "http://gateway.marvel.com/v1/public/characters";
const API_KEY = "d7a31d58aad547ea00b2e4dfe96db41c";
const HASH = "797c299de5a8289ec40e86b35483e4c79a77e8d1";

export const Main = () => {
    const [url, seyUrl] = useState ("https://gateway.marvel.com/v1/public/characters?ts=1&apikey=2e1cdeec426ae323484f29024084c206&hash=d516513ba95b9407c7aca0f73b241f8a");
    const [item, setItem] = useState ([]);
    const [search, setSearch] = useState("");

    const fetchCharacters = async (url) => {
        try{
            const res = await axios.get(url);
            setItem(res.data.data.results);
        } catch(error){
            console.error("Erro ao buscar dados " + error);
        }
    };
      
    useEffect(() => {
        const ts = Date.now();
    const iniatiaUrl = `${BASE_URL}?ts=${ts}$apiKey=${API_KEY}&hash=${HASH}`;
        fetchCharacters(initiaUrl);
    },[]);

    const searchMarvel = (e) => {
        if(e.key === "Enter"){
            const ts = Date.now();
            const searchUrl = `${BASE_URL}?nameStartWith=${search}&ts=${ts}&apiKey${API_KEY}$hash=${HASH}`;
            fetchCharacters(searchUrl);
        }
    };

    return (
        <>
        <div className = "header">
            <div className="bg">
                <img src="./Images/bg.gif" alt=""></img> 
                </div>
                <br></br>
                <div className="searcj-bar">
                    <img className="logo" src="./images/logo.png" alt="logo"></img>
                    <p> </p>
                    <input>
                    type="search"
                    placeholder="Procurar Herói"
                    className="search"
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={searchMarvel}
                    </input>
                </div>
            </div>
            <div className="content">
                {!item.lenght ? <p>Não encontrado</p> : <Card data={item} ></Card>}
            </div>
            </>
    );
}