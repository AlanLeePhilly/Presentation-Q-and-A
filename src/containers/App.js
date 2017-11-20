import React from 'react';
import Tile from '../components/Tile';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      selectedTile: 0,
      data: []
    }

    this.tileSelect = this.tileSelect.bind(this)
  }

// just sets state 'selected' to passed id
  tileSelect(id) {
    // if (id === this.state.selectedTile) {
    //   this.setState({ selectedTile: null})
    // } else {

      this.setState({ selectedTile: this.state.selectedTile + 1 })
    // }
  }



// loads data to state data: after mount
  componentDidMount() {

    fetch('http://localhost:3000/api/v1/questions')
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({
          data: body
        })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }


  render() {
      let tiles = this.state.data.map(tile => {
      let handleClick = () => { this.tileSelect(tile.id) }
        return(
          <Tile
            key={tile.id}
            id={tile.id}
            selectedId={this.state.selectedTile}
            body={tile.body}
            handleClick={handleClick}
          />
        )
      })

// load button and questions
// click button to load answer
// click answer to load buttons and questions

    return(
      <div className='page columns large-8 large-centered'>
        <h1>Mindfulness</h1>
        <div className='question-list'>
          {tiles}
        </div>
      </div>
    )
  }
}

export default App;
