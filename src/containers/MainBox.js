import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {selectedPage: 'profile'}
  }

  onSelectTab = (event) => {
    const tab = event.target.id
    this.setState({selectedPage: tab})
    console.log(tab)
  }

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    let page 
    switch (this.state.selectedPage) {
      case 'profile':
        page = <Profile />
        break
      case 'photo':
        page = <Photos />
        break
      case 'cocktail':
        page = <Cocktails />
        break
      case 'pokemon':
        page = <Pokemon />
        break
    }

    return (
      <div>
        <MenuBar onSelectTab={this.onSelectTab} selectedPage={this.state.selectedPage} />
        {page}
      </div>
    )
  }

}

export default MainBox
