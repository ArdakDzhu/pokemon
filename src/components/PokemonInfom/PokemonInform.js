import React from 'react';
import styles from './PokemonInform.module.scss';
import Ditto from '../../images/Ditto.png';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react/cjs/react.development';

export default function PokemonInform(props) {
    const [data, setData] = useState({});

    useEffect(() => {
        setData(props.getPokemonDataReductor())
    }, [props.data])

    return (
        <div>
            <div className={styles.pokemonInform}>
                <img className={styles.pictureOfPokemon} src={data.image}/>

                <h1>{data.name}</h1>

                <div className={styles.pokemonCharacteristic}>
                    <div className={styles.leftSide}>
                        <h2>Stats</h2>

                        <p><b>hp: </b>{data.hp}</p>
                        <p><b>attack: </b>{data.attack}</p>
                        <p><b>deffence: </b>{data.deffence}</p>
                    </div>
                    
                    <div className={styles.rightSide}>
                        <p><b>special attack: </b>{data.specialAttack}</p> 
                        <p><b>special deffence: </b>{data.specialDeffence}</p>
                        <p><b>speed: </b>{data.speed}</p>
                    </div>
                </div>

            </div>
            <Link to='/'><span className={styles.backBtn}> &lt; Back</span></Link>
        </div>
    )
}
