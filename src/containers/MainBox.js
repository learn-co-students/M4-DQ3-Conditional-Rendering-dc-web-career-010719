import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  constructor(){
    super()
    this.state = {
      selectedPage: 'profile'
    }
  }

  onSelectTab = (id) => {
    this.setState({selectedPage: id})
  }

  detailsToDisplay = () => {
    if (this.state.selectedPage === 'profile') {
      return <Profile />
    } else if (this.state.selectedPage === 'photo') {
      return <Photos />
    } else if (this.state.selectedPage === 'cocktail') {
      return <Cocktails />
    } else if (this.state.selectedPage === 'pokemon') {
      return <Pokemon />
    }
  }

  render() {

    


    return (
      <div>
        <MenuBar onSelectTab={this.onSelectTab} selectedPage={this.state.selectedPage}/>
        {this.detailsToDisplay()}
      </div>
    )
  }

}

export default MainBox
