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
      renderBeast: animalArray,
      displayModal: false,
      src: 'https://placehold.it/500x100/444',
    }
  }

  showFavePic = (animal) => {
    this.setState({     
      src: animal,
      displayModal: true
    })
  }

  getHornNum = (newArray) => {
    console.log(newArray)
    this.setState({     
      renderBeast: newArray
    })
  }

  hideModal = () => {
    this.setState({displayModal: false})
  }

  render () {
    return(
      <>
        <Header />

        <Container>
          <FilterBeast 
            getHornNum = {this.getHornNum} 
            animalArray = {animalArray}
          />          
        </Container>

        <Main 
          animalArray = {this.state.renderBeast}
          showFavePic={this.showFavePic}
        />

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
