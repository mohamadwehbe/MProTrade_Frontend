import { TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ContactAlert from './ContactAlert';
import axios from 'axios';

function Contact(props) {

    const id = localStorage.getItem("id")

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [question,setQuestion] = useState('');
    const [radioCheck,setRadioCheck] = useState('');
    const [submitted,setSubmitted] = useState(false);

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!name || !email || !question || !radioCheck) {
            alert("Please fill in all fields")
        }
        else {
            const fd = new FormData();
            fd.append('name',name)
            fd.append('email',email)
            fd.append('question',question)
            axios.post(`http://127.0.0.1:8000/api/addmsg`, fd).then(res => {
            console.log(res.data)
            setSubmitted(true)
        }).catch(err => {
            console.log(err, 'Failed to add request')
        })
        }
    }

    useEffect(()=>{
        if(submitted) {
            setName('')
            setEmail('')
            setQuestion('')
            setSubmitted(false)
        }
    },[submitted])

    return (
        <div className="contactpage">
            <p className="contacttxt1">
                Need something? I am here to help.
                Please get in touch and I will answer all your questions...
            </p>
            <div className="contdown">
                <div className="question" style={{borderRadius:50}}>
                    <p className="meet">
                        Fill the form
                    </p>
                    <TextField
                        id="outlined-required"
                        label="Full name"
                        variant="outlined"
                        style={{
                            margin:10,
                            backgroundColor:'#ffffff',
                            width:300
                        }}
                        value={name}
                        onChange={e=>setName(e.target.value)}
                    />
                    <TextField
                        id="outlined-required"
                        label="Email"
                        variant="outlined"
                        style={{
                            margin:10,
                            backgroundColor:'#ffffff',
                            width:300
                        }}
                        value={email}
                        onChange={e=>setEmail(e.target.value)}
                    />
                    <p style={{
                        color: "#000",
                        fontWeight:600,
                        fontSize:20
                        }}>
                        Are you an existing customer?
                    </p>
                    <RadioGroup
                        row aria-label="position"
                        name="position"
                        defaultValue="top"
                        style = {{margin:5}}
                        >
                        <FormControlLabel
                            value="yes"
                            control={<Radio color="primary"
                                            onChange={e=>setRadioCheck(e.currentTarget.value)}
                                    />}
                            label="Yes"
                        />
                        <FormControlLabel
                            value="no"
                            control={<Radio color="primary"
                                            onChange={e=>setRadioCheck(e.currentTarget.value)}
                                    />}
                            label="No"
                        />
                    </RadioGroup>
                    <TextField
                        id="outlined-required"
                        label="Your question ?"
                        variant="outlined"
                        multiline
                        rows={4}
                        style={{
                            margin:10,
                            backgroundColor:'#ffffff',
                            width:300
                        }}
                        value={question}
                        onChange={e=>setQuestion(e.target.value)}
                    />
                    <ContactAlert handleSubmit={handleSubmit}/>
                </div>
                <div className="knowadmin" style={{borderRadius:50}}>
                    <p className="meet">
                        Meet the admin
                    </p>
                    <div className="adminimg"></div>
                    <p className="name">
                        Mohamad Wehbe
                    </p>
                    <div className="about">
                        <p className="abouttext">
                        Junior full stack web developer<br/>
                        BSc in computer science<br/>
                        Master in GIS<br/>
                        Lebanese University<br/>
                        SE factory graduate<br/>
                        mwehbemhd@gmail.com
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;