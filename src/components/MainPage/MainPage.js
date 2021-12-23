import React from 'react';
import styles from './MainPage.module.scss';
import Logo from '../../images/Logo.svg';
import PokemonInform from '../PokemonInfom/PokemonInform';
import {Route, Routes, useLocation, useParams} from 'react-router-dom'
import FindPokemonPage from '../FindPokemonPage/FindPokemonPage';
import { useState, useEffect } from 'react/cjs/react.development';

export default function MainPage() {

    const [input, setInput] = useState('');
    const [data, setData] = useState();


    const getPokemon = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
        .then((res) => res.json())
        .then((res)=> setData(res))
    }

    const getPokemonDataReductor = () => {
        console.log('data', data)
        if(data){
            return {
                image: data.sprites.front_default,
                name: data.name,
                hp: data.stats[0].base_stat,
                attack: data.stats[1].base_stat,
                deffence: data.stats[2].base_stat,
                specialAttack: data.stats[3].base_stat,
                specialDeffence: data.stats[4].base_stat,
                speed: data.stats[5].base_stat,
            }
        }
    }


    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${window.location.pathname.split('/')[2]}`)
        .then((res) => res.json())
        .then((res)=> setData(res))
    },[])

    console.log('data', data)

    return (
        <div className={styles.mainPage}>
            <div className={styles.header}>
                <img  className={styles.logo} src={Logo}/>
            </div>
            <Routes>
                <Route path='/' element={
                    <FindPokemonPage data={data} input={input} setInput={setInput} getPokemon={getPokemon}/>
                }/>
                <Route path='/pokemon-inform' element={<PokemonInform getPokemonDataReductor={getPokemonDataReductor}/>}/>
            </Routes>
        </div>
    )
}
