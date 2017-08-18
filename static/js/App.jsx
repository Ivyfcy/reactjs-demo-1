import React from 'react';
import Head from './Head';
import styles from '../css/App.css';

export default class App extends React.Component {

    render() {
        return (
            <div>
                <Head/>
                <form>
                    <input/>
                    <button className={styles['text']}>OK</button>
                </form>
            </div>
        );
    }
}