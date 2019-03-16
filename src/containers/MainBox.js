import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  constructor() {
    super()
    this.state = {
      detailsToDisplay: null
    }
  }

  onClickOfProfile = () => {
    this.setState({detailsToDisplay: Profile()})
  }

  onClickOfPhoto = () => {
    this.setState({detailsToDisplay: Photos()})
  }

  onClickOfCocktail = () => {
    this.setState({detailsToDisplay: Cocktails()})
  }

  onClickOfPokemon = () => {
    this.setState({detailsToDisplay: Pokemon()})
  }

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    const detailsToDisplay = <div>{this.state.detailsToDisplay}</div>

    return (
      <div>
        <MenuBar
          onClickOfProfile={this.onClickOfProfile}
          onClickOfPhoto={this.onClickOfPhoto}
          onClickOfCocktail={this.onClickOfCocktail}
          onClickOfPokemon={this.onClickOfPokemon}
        />
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
