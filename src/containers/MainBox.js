import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  state = {active: 'profile'}

  changeActive = (tab) => {
    this.setState({active:tab})
  }

  render() {

    let content

    switch (this.state.active) {
      case 'profile':
        content = <Profile />
        break
      case 'photo':
        content = <Photos />
        break
      case 'cocktail':
        content = <Cocktails />
        break
      case 'pokemon':
        content = <Pokemon />
        break
      default:
        content = <Profile />
        break
    }

    return (
      <div>
        <MenuBar changeActive={this.changeActive} active={this.state.active}/>
        {content}
      </div>
    )
  }

}

export default MainBox
