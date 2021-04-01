import React from 'react'
import Main from './components/Main';
import SelectedBeast from './components/SelectedBeast';
import Header from './components/Header';
import FilterBeast from './components/FilterBeast';
import Container from 'react-bootstrap/Container';
import animalArray from './data.json';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      horn: "",
      displayModal: false,
      src: 'https://placehold.it/500x100/444',
    }
  }

  showFavePic = (animal) => {
    // console.log("clicked")
    // console.log(animal)
    this.setState({     
      src: animal,
      displayModal: true
    })
  }

  getHornNum = (horn) => {
    console.log("clicked")
    console.log(horn)
    this.setState({     
      horn: horn
    })
    // // console.log(animal)
    
  }

  hideModal = () => {
    this.setState({displayModal: false})
  }

  render () {
    return(
      <>
        <Header />
        <Container>
          <FilterBeast getHornNum={this.getHornNum}/>          
        </Container>
        <Main animalArray = {animalArray} showFavePic={this.showFavePic} horn/>
        <SelectedBeast 
        displayModal ={this.state.displayModal}
        hideModal={this.hideModal}
        img={this.state.src.imgUrl} 
        />
      </>
    )
  }
}

export default App;
