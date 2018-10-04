import React from 'react';

const Title = props => 
    <div className="title">
        <h1>Webpack config 2</h1>
        <ol>
            {props.data.map(result => <li key={result.id}>{result.text}</li>)} 
        </ol>
    </div>


export default Title;