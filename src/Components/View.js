import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import ImgProduct from './ImgProduct';

function View(props) {

    const history = useHistory();
    const id = localStorage.getItem("id")

    useEffect(()=>{
        if(!id) {
        history.push('/login')
        }
    },[id])

    return (
        <div className="hardware">
            <ImgProduct row = {props.prorow} nb={props.nb} setNb={props.setNb}/>
        </div>
    );
}

export default View;