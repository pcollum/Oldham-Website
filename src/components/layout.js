import React from "react"
import { Link } from "gatsby"
const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem`, backgroundColor:'white'}}>
  
    <header style={{ marginBottom: `1.5rem`, backgroundColor:'white' }}>
      <Link to="/" style={{ textShadow: `none`, backgroundColor: `white`, border: '100px red' }}>
        <h3 style={{ display: `inline-flex`, fontFamily:'Arial', fontSize: '45px' }}>
        <img
        src="https://www.decathlon.co.uk/media/839/8392320/big_11deeab7-c2d3-40f8-a211-0cdbb65b930a.jpg"
        alt="Football"
        height="100" width="100"
        />
        Oldham Athletic</h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right`, fontWeight: 'bold', fontFamily: 'Comic Sans' }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>
    {children}
  </div>
)