import { Button, TextField } from '@material-ui/core';
import React, {useEffect,useState} from 'react';
import { useHistory } from 'react-router-dom';
import AlbumCart from './Admin/AlbumCart';
import axios from 'axios';
import OrderAlert from './OrderAlert';

function Card() {

    const history = useHistory();
    const id = localStorage.getItem("id")

    const [city,setCity] = useState('')
    const [area,setArea] = useState('')
    const [street,setStreet] = useState('')
    const [building,setBuilding] = useState('')
    const [floor,setFloor] = useState('')
    const [done,setDone] = useState(false)

    const [hcart,setHcart] = useState([])
    const [scart,setScart] = useState([])

    const allCart = () => {

        const fd = new FormData();
        fd.append('customer_id',id);

        axios.post(`http://127.0.0.1:8000/api/listcart`,fd).then(res => {
            setHcart(res.data.hardcarts)
            setScart(res.data.softcarts)
        })
        .catch(err => {
            console.log(err, 'Failed to add request')
        })
    }

    const rows = hcart.concat(scart);

    useEffect(()=>{
        if(!id) {
        history.push('/login')
        }
    },[id])

    useEffect(()=>{
        allCart();
        console.log(rows)
    },[])

    useEffect(()=>{
        if(done) {
            setCity('')
            setArea('')
            setStreet('')
            setBuilding('')
            setFloor('')
            setDone(false)
        }
    },[done])

    const addAddress = ()=> {
        if(!city || !area || !street || !building || !floor) {
            alert("Please fill in all fields")
        }
        else {

            const fd = new FormData();
            fd.append('customer_id',id);
            fd.append('city',city);
            fd.append('area',area);
            fd.append('street',street);
            fd.append('building',building);
            fd.append('floor',floor);

            axios.post(`http://127.0.0.1:8000/api/addorder`,fd).then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err, 'Failed to add request')
            })
            setDone(true)
        }
    }

    const deleteHardCart = ()=> {
        const fd = new FormData();
        fd.append('customer_id',id);

        axios.post(`http://127.0.0.1:8000/api/deletehardcart`,fd).then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err, 'Failed to add request')
            })
    }

    const deleteSoftCart = ()=> {
        const fd = new FormData();
        fd.append('customer_id',id);

        axios.post(`http://127.0.0.1:8000/api/deletesoftcart`,fd).then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err, 'Failed to add request')
            })
    }

    const buy = (e)=> {
        e.preventDefault();
        addAddress();
        deleteHardCart();
        deleteSoftCart();
    }

    return (
        <div className="usercard">
            <div className="hiuser">
                <p className="contacttxt2">
                    Hope you found what you want.
                    Enjoy our Client’s products
                </p>
            </div>
            <div className="products" style={{marginBottom:20}}>
                <div
                    style={{display:'flex',
                    flexDirection:'column',
                    alignItems:'center',
                    marginRight:20,
                    backgroundColor:'aliceblue',
                    padding:20,
                    borderRadius:50,
                    boxShadow:'0 3px 5px #333'}}>
                    <TextField
                        id="outlined-required"
                        label="City"
                        variant="outlined"
                        style={{
                            margin:10,
                            backgroundColor:'#ffffff'
                        }}
                        value={city}
                        onChange = {e=>setCity(e.target.value)}
                    />
                    <TextField
                        id="outlined-required"
                        label="Area"
                        variant="outlined"
                        style={{
                            margin:10,
                            backgroundColor:'#ffffff'
                        }}
                        value={area}
                        onChange = {e=>setArea(e.target.value)}
                    />
                    <TextField
                        id="outlined-required"
                        label="Street Address"
                        variant="outlined"
                        style={{
                            margin:10,
                            backgroundColor:'#ffffff'
                        }}
                        value={street}
                        onChange = {e=>setStreet(e.target.value)}
                    />
                    <TextField
                        id="outlined-required"
                        label="Building"
                        variant="outlined"
                        style={{
                            margin:10,
                            backgroundColor:'#ffffff'
                        }}
                        value={building}
                        onChange = {e=>setBuilding(e.target.value)}
                    />
                    <TextField
                        id="outlined-required"
                        label="Floor"
                        variant="outlined"
                        style={{
                            margin:10,
                            backgroundColor:'#ffffff'
                        }}
                        value={floor}
                        onChange = {e=>setFloor(e.target.value)}
                    />
                    <OrderAlert buy={buy}/>
                </div>
                { !rows.length==0 ?
                  (
                    <div style={{borderRadius:50,backgroundColor:'#000',boxShadow:'0 3px 5px #333',padding:10}}>
                    <AlbumCart rows={rows} id={id}/>
                    </div> )
                : (
                    <div style={{borderRadius:50,backgroundColor:'#000',boxShadow:'0 3px 5px #333'}}>
                    <p className="emptyCart">Go to the software/hardware pages to see our clients' products</p>
                    </div> )
                }
            </div>
        </div>
    );
}

export default Card;