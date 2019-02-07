import React from "react"
import { connect } from "react-redux"

import { CharacterList } from "../components"
// import actions
import { fetchCharacters } from "../actions"

class CharacterListView extends React.Component {
  componentDidMount() {
    // call our action
    this.props.fetchCharacters()
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return <h2>Fetching characters!!</h2>
    }
    if (this.props.error) {
      return <h2>{this.props.error}</h2>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    )
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = state => {
  return {
    fetching: state.charsReducer.fetching,
    characters: state.charsReducer.characters,
    error: state.charsReducer.error
  }
}

export default connect(
  mapStateToProps,
  {
    fetchCharacters: fetchCharacters
  }
)(CharacterListView)
