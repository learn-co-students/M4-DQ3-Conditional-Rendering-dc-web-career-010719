import React from "react";

export default class MenuBar extends React.Component {
  /*

  The 'a' tags below are the menu items. Think about the way a menu
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */

  render() {
    return (
      <div className="ui four item menu">
        <a
          onClick={this.props.onSelectTab}
          className={
            this.props.activePage === "profile" ? "item active" : "item"
          }
          id="profile"
        >
          <i className="user large icon" id="profile" />
        </a>

        <a
          onClick={this.props.onSelectTab}
          className={this.props.activePage === "photo" ? "item active" : "item"}
          id="photo"
        >
          <i className="photo large icon" id="photo" />
        </a>

        <a
          onClick={this.props.onSelectTab}
          className={
            this.props.activePage === "cocktail" ? "item active" : "item"
          }
          id="cocktail"
        >
          <i className="cocktail large icon" id="cocktail" />
        </a>

        <a
          onClick={this.props.onSelectTab}
          className={
            this.props.activePage === "pokemon" ? "item active" : "item"
          }
          id="pokemon"
        >
          <i className=" themeisle large icon" id="pokemon" />
        </a>
      </div>
    );
  }
}
