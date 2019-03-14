import React from "react";
import MenuBar from "../components/MenuBar.js";
import { Profile, Photos, Cocktails, Pokemon } from "../components/Pages.js";

class MainBox extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedPage: "profile"
    };
  }

  onSelectTab = event => {
    this.setState({ selectedPage: event.target.id });
  };

  render() {
    let page;
    switch (this.state.selectedPage) {
      case "profile":
        page = <Profile />;
        break;
      case "photo":
        page = <Photos />;
        break;
      case "cocktail":
        page = <Cocktails />;
        break;
      case "pokemon":
        page = <Pokemon />;
    }
    return (
      <div>
        <MenuBar
          onSelectTab={this.onSelectTab}
          activePage={this.state.selectedPage}
        />
        {page}
      </div>
    );
  }
}

export default MainBox;
