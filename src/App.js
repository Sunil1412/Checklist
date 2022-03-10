import React, { Component } from 'react'

export class App extends Component {
  state={

    isCitizen:false,
    isOver21: false
  }

  onChange= e=>{
    if(e.target.type==="checkbox")
    this.setState({[e.target.name]: e.target.checked})
    else
    this.setState({[e.target.name] : e.target.value})
  }

  render() {

    const {isCitizen,isOver21} = this.state

    return (
      <div>
        <form>

          <h1>Are You Citizen : {isCitizen ? "Yes" : "No"}</h1>
          <h1>Are You over 21  : {  isOver21 ? "Yes" : "No"}</h1>

          <label>
            Are You Citizen?

            <input type="checkbox"
            checked={isCitizen}
            name='isCitizen'
            onChange={this.onChange}/>
          </label>

          <label>
           Are You over 21?

            <input type="checkbox"
            checked={  isOver21}
            name='isOver21'
            onChange={this.onChange}/>
          </label>
          
         
        </form>

      </div>
    )
  }
}

export default App
