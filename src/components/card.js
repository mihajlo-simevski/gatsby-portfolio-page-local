import React from 'react'
import { Card } from 'semantic-ui-react'
import styles from './card.module.css';

// const src = '../images/wireframe/image.png'

const HeroCard = () => (
<div className={styles.cardBackground}>
  <Card.Group className={styles.heroCard} itemsPerRow={3}>
    <Card raised image={require('../images/wireframe/image.png')} />
    <Card raised image={require('../images/wireframe/image.png')} />
    <Card raised image={require('../images/wireframe/image.png')} />
    <Card raised image={require('../images/wireframe/image.png')} />
    <Card raised image={require('../images/wireframe/image.png')} />
    <Card raised image={require('../images/wireframe/image.png')} />
  </Card.Group>
  </div>
)

export default HeroCard