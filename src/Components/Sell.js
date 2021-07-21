import { Button, TextField, OutlinedInput, InputAdornment, InputLabel } from '@material-ui/core';
import React, {useEffect,useState} from 'react';
import ProductSwiper from './ProductSwiper';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import trans from '../images/transaction.svg';
import undraw from '../images/undraw.svg';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import SellAlert from './SellAlert';

function Sell(props) {

    const history = useHistory();
    const id = localStorage.getItem("id")

    const [name,setName] = useState('')
    const [description,setDescription] = useState('')
    const [price,setPrice] = useState('')
    const [img,setImg] = useState('')
    const [radioCheck,setRadioCheck] = useState('')
    const [added,setAdded] = useState(false)

    const addSoftProductHandler = (e) => {
        e.preventDefault();
        if(!name || !description || !price || !img) {
            alert("Please fill in all fields");
            return;
        }
        else {

            const fd = new FormData();
            fd.append('name',name);
            fd.append('image',img);
            fd.append('description',description);
            fd.append('price',price);
            fd.append('customer_id',id);

            axios.post(`http://127.0.0.1:8000/api/addsoftware`, fd).then(res => {
                setAdded(true)
            }).catch(err => {
                console.log(err, 'Failed to add request')
            })
        }
    };

    const addHardProductHandler = (e) => {
        e.preventDefault();
        if(!name || !description || !price || !img) {
            alert("Please fill in all fields");
            return;
        }
        else {

            const fd = new FormData();
            fd.append('name',name);
            fd.append('image',img);
            fd.append('description',description);
            fd.append('price',price);
            fd.append('customer_id',id);

            axios.post(`http://127.0.0.1:8000/api/addhardware`, fd).then(res => {
                setAdded(true)
            }).catch(err => {
                console.log(err, 'Failed to add request')
            })
        }
    };

    useEffect(()=>{
        if(!id) {
        history.push('/login')
        }
    },[id])

    useEffect(()=>{
        console.log(added)
        if(added === true) {
            setName('')
            setImg('')
            setPrice('')
            setDescription('')
            setAdded(false)
        }
    },[added])

    const addProduct = (e)=>{
        console.log('category',radioCheck)
        if(radioCheck === 'software')
            addSoftProductHandler(e)
        if(radioCheck === 'hardware')
            addHardProductHandler(e)
    }

    return (
        <div className="software">
            <p className="contacttxt">Share your product with us so we can help you selling it.</p>
            <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                <div className="sell" style={{borderRadius:50}}>
                    <p style={{color:"#000000",fontSize:30,fontWeight:600,margin:10}}>Sell Your Product</p>
                    <RadioGroup
                        row aria-label="position"
                        name="position"
                        defaultValue="top"
                        style = {{margin:5}}
                        >
                        <FormControlLabel
                            value="software"
                            control={<Radio color="primary"
                                            onChange={e=>setRadioCheck(e.currentTarget.value)}
                                    />}
                            label="Software"
                        />
                        <FormControlLabel
                            value="hardware"
                            control={<Radio color="primary"
                                            onChange={e=>setRadioCheck(e.currentTarget.value)}
                                    />}
                            label="Hardware"
                        />
                    </RadioGroup>
                    <TextField
                        id="outlined-required"
                        label="Product"
                        variant="outlined"
                        style={{
                            margin:10,
                            backgroundColor:'#ffffff',
                        }}
                        value={name}
                        onChange = {e=>setName(e.target.value)}
                    />
                    <TextField
                        id="outlined-required"
                        label="Description"
                        variant="outlined"
                        multiline
                        rowsMax={4}
                        style={{
                            margin:10,
                            backgroundColor:'#ffffff',
                        }}
                        value={description}
                        onChange = {e=>setDescription(e.target.value)}
                    />
                    <div style={{display:'flex',
                                flexDirection:'row',
                                alignItems:'center',
                                margin:10,
                                }}
                    >
                    <InputLabel
                    htmlFor="price"
                    style={{margin:10,color:'#000000'}}
                    >Price</InputLabel>
                    <OutlinedInput
                        id="price"
                        style={{
                            backgroundColor:'#ffffff',
                            width:100
                        }}
                        value={price}
                        onChange = {e=>setPrice(e.target.value)}
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    />
                    </div>
                    <p
                    style={{
                        color:"#000000",
                        fontWeight:550,
                        fontSize:18,
                        marginTop:12
                    }}
                    >Upload the product's image:</p>
                    <input type="file"
                        style={{
                            width:250,
                            marginBottom:10,
                            marginLeft:10,
                            marginRight:10,
                            color:"#ffffff",
                            fontWeight:600,
                            backgroundColor:"#000000",
                            borderRadius:5,
                            paddingTop:10,
                            paddingBottom:10,
                            paddingLeft:10,
                        }}
                        onChange = {e=>setImg(e.target.files[0])}
                    />
                    <SellAlert addProduct={addProduct}/>
                </div>
                <div style={{display:'flex',flexDirection:'column',alignItems:'center',paddingBottom:50}}>
                <img style={{width:'60%'}} src={undraw} alt='undraw'/>
                <img style={{width:'50%'}} src={trans} alt='trans'/>
                </div>
                </div>
            </div>
    );
}

export default Sell;