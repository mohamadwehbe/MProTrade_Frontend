import React from 'react';
import AlbumAdmin from './AlbumAdmin'

function Softproduct({rows}) {
    return (
        <div style={{backgroundColor:'black',width:'100%'}}>
            <AlbumAdmin rows={rows}/>
        </div>
    );
}

export default Softproduct;