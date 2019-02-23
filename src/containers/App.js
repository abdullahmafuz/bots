import React,{Component} from 'react';


import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';


class App extends Component {
    constructor(){
        super();
        this.state = {
            robots:[],
            searchfield :''
        
        }
    }
componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res =>{
       return res.json();
    }).then(user =>{
        this.setState({ robots :user})
    });
    
}

    onSearchChange=(event)=>{
       this.setState({searchfield :event.target.value })  

        

    }
    render(){
        const filterrobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if(!this.state.robots.length ){

           return <h1>Page is Loading</h1>
        }else{

        return(
            <div className='tc'>
                <h1 className='f1'>Bots</h1>
                <SearchBox searchchange={this.onSearchChange}/>
                <Scroll>
                <CardList robots={filterrobots} />
                </Scroll>
            </div>
         
        );
    }
    }
   
}
export default App;