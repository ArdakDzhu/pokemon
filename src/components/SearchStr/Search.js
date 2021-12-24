import React from 'react';
import styles from './Search.module.scss';

export default function Search(props) {

    const getFindPokemon = (event) => {
        if (event.code === "Enter") {
            props.getPokemon()
        }
    }

    return (
        <div className={styles.search}>
            <input value={props.input} onChange={event => props.setInput(event.target.value)} onKeyUp={(event) => getFindPokemon(event)} placeholder="Find pokemon"/>
            <button onClick={props.getPokemon}>Search</button>
        </div>
    )
}
