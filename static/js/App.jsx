import React from 'react';
import Head from './Head';

export default class App extends React.Component {

    render () {
        return (
            <div>
                <Head />
                <form>
                    <input />
                    <button>OK</button>
                </form>
            </div>
        );
    }
}