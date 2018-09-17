import React, {Component} from 'react'
class Header extends Component{
    render(){
        return(<header> 
                    <div className='logo'>Logo</div>
                    <input onChange={this.inputChangeHandler} type='text'/>
                    <div id='texthere'>Text will come here</div>
                </header>
            )}

inputChangeHandler(event)
{
    console.log(event.target.value)
    // document.getElementById('texthere').value=event.target.value;
    document.getElementById('texthere').innerHTML = (event.target.value);
}
}

export default Header;