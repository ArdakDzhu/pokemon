import React from 'react';
import PokemonItem from '../PokemonItem/PokemonItem';
import Search from '../SearchStr/Search';
import styles from './FindPokemonPage.module.scss';

export default function FindPokemonPage(props) {
    return (
        <div className={styles.container}>
            <Search input={props.input} setInput={props.setInput} getPokemon={props.getPokemon}/>
            <div className={styles.mainWrapper}>
                {props.data
                    ? <PokemonItem  name={props.data.name} img={props.data.sprites.front_default}/>
                    : null
                }
        </div>
    </div>
    )
}
