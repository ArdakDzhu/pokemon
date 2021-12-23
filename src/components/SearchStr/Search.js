import React from 'react';
import styles from './Search.module.scss';

export default function Search(props) {
    return (
        <div className={styles.search}>
            <input value={props.input} onChange={event => props.setInput(event.target.value)} placeholder="Find pokemon"/>
            <button onClick={props.getPokemon}>Search</button>
        </div>
    )
}
