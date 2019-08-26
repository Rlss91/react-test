import React, { Component } from 'react'

export default class RefsComponent extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
    handleOnClick = () =>
    {
        this.myRef.current.focus();
        console.log(this.myRef.current.value)
    }
    componentDidMount(){
        //document.getElementById('password').value
        this.myRef.current.focus();
    }
    render() {
        return <div>
            <input type="text" placeholder="username" />
            <input type="text" placeholder="password" ref={this.myRef} autoFocus />
            <button onClick={this.handleOnClick}>focus password</button>
        </div>
    }
}
