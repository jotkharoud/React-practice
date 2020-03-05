import React from 'react'
import DataList from './DataList'


class App extends React.Component{
    state = { resource : '',
                 items: []}

     handleSubmit = (event) =>{
       event.preventDefault()
       this.setState({
           resource : '',
           items: [...this.state.items, this.state.resource]
       })

     }
     onChangeItem = (event)=> this.setState({resource : event.target.value})

    render(){
        return(
    <>
            <h1> Todo List</h1>
            <div className = " ui segment">
                        <form
                        className = " ui form"
                        onSubmit = {this.handleSubmit}
                        >
                        <input 
                        placeholder = "Enter text"
                        type = "text"
                         value = {this.state.resource}
                          onChange = {this.onChangeItem}
                        />
                      
                      <button 
                    className = "ui primary button">
                    Submit
                    </button>
                    </form>
                    <DataList items = {this.state.items} />
                    </div> 
                
           
      </> 
  
            
        )
    }
}

export default App


