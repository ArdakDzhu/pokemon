import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PokemonItem.module.scss';

export default function PokemonItem(props) {
    return (
        <Link to={`/pokemon-inform`}>
            <div className={styles.pokemonItem}>
                <img className={styles.ditto} src={props.img}/>
                <p>{props.name}</p>
            </div>
        </Link>
    )
}
