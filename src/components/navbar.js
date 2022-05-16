import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from "gatsby"

import styles from './navbar.module.css';

export default class Navbar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div className={styles.navWrapper}>
      <Menu secondary>
      <Link to="/">
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        </Link>
        <Link to="/about">
        <Menu.Item
          name='about'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
        />
        </Link>
        <Menu.Item
          name='projects'
          active={activeItem === 'projects'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='contact'
          active={activeItem === 'contact'}
          onClick={this.handleItemClick}
        />
      </Menu>
    </div>
    )
  }
}