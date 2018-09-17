import React, {Component} from 'react'
class Header extends Component{
state = {
    keywords: "Fookin cunt!",
}

    render(){

        return(<header> 
                    <div className='logo'>Logo</div>
                    <input onChange={(e) => this.inputChangeHandler(e)} type='text'/>
                    <div id='texthere'>{this.state.keywords}</div>
                    
                </header>
            )}

    inputChangeHandler(event)
        {
            this.setState({
                keywords: event.target.value
            })
            document.getElementById('texthere').innerHTML = this.state.keywords
            // document.getElementById('texthere').innerHTML = (event.target.value);
        }
}

export default Header;