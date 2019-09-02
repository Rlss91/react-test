import React, { Component } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'; 
import Joi from 'joi-browser'

export default class Login extends Component {
    state = {
        inputs:
        {
            us: '',
            ps: ''
        }, 
        token: '',
        error: []
    }

    schema = Joi.object().keys({
        us: Joi.string().alphanum().min(5).max(30).required(),
        ps: Joi.string().regex(/^[a-zA-Z0-9]{5,30}$/).required()
    }).with('us', 'ps')

    handleInput = (e) => {
        let state = {...this.state}
        state.inputs[e.target.name] = e.target.value
        this.setState(state)
    }

    fetchGet(url){
        fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            console.log(JSON.stringify(myJson));
        });
    }

    fetchPost(url, data){
  // Default options are marked with *
         return fetch(url, {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, cors, *same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json',
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow', // manual, *follow, error
                referrer: 'no-referrer', // no-referrer, *client
                body: JSON.stringify(data), // body data type must match "Content-Type" header
            })
            .then(response => response.json()) // parses JSON response into native JavaScript objects 
            .then(data => data) // JSON-string from `response.json()` call
            .catch(error => console.error(error))
    }

    axiosGet(url, data){
        axios.get(url, {
            params: data
          })
          .then(function (response) {
            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
          })
          .then(function () {
            // always executed
          });          
    }

    validate = () =>{
        let err = []
        let {us, ps} = this.state.inputs
        if(us.trim().length == 0){
            err = [...err, 'username is requerd']
        }
        if(ps.trim().length == 0){
            err = [...err, 'password is requerd']
        }
        if(us.trim().length < 5){
            err = [...err, 'username is to smoll']
        }
        if(ps.trim().length < 5){
            err = [...err, 'password is to smoll']
        }
        console.log(err)
        this.setState({error: [...err]})
        return err.length == 0
    }

    validateJoi = () => {
        const result = Joi.validate({...this.state.inputs}, this.schema, { abortEarly: false });
        let arr = result.error.details.map(item => item.message)
        this.setState({error: [...arr]})
        //console.log(result.error.details[0].message)
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        //this.fetchGet('http://localhost:3001/api/')
        //this.axiosGet('http://localhost:3001/api/',{})
        //send server request
        //this.fetchPost('http://localhost:3001/api/', this.state.inputs)
        this.validateJoi()
        /*let errr = this.validate()
        if(!errr){
            let data = await this.fetchPost('http://localhost:3001/api/login', this.state.inputs)
            //this.setState({token: data})
            if(data.error)
                console.log(data.error)
            else
                this.setState({token: data})
        }*/
    }
    handleSubmitAdmin = async (e) => {
        e.preventDefault()
        //this.fetchGet('http://localhost:3001/api/')
        //this.axiosGet('http://localhost:3001/api/',{})
        //send server request
        //this.fetchPost('http://localhost:3001/api/', this.state.inputs)
        let data = await this.fetchPost('http://localhost:3001/api/admin', {token: this.state.token})
        console.log(data)
    }

    render() {
        return (
            <div>
                <button onClick={this.props.onCloseModel}>x</button>
                <h1>{this.props.nameB}</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="us" placeholder="Username" onChange={this.handleInput} value={this.state.inputs.us} /><br />
                    <input type="text" name="ps" placeholder="Password" onChange={this.handleInput} value={this.state.inputs.ps} /><br />
                    <button>send</button>
                </form>
                <div>
                {this.state.error.map(item => {
                    return <div key={item} className="err">{item}</div>
                })}
                </div>
                <form onSubmit={this.handleSubmitAdmin}>
                    <input type="hidden" name="token" placeholder="token" value={this.state.token} /><br />
                    <button>send</button>
                </form>
            </div>
        )
    }
}

Login.propTypes = {
    onCloseModel: PropTypes.func.isRequired,
    nameB: PropTypes.string
}