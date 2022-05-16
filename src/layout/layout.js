import React, { Children } from "react";
import Navbar from '../components/navbar.js';
import 'semantic-ui-css/semantic.min.css'

import './layout.module.css';

function Layout(props) {
    return (
        <React.Fragment>
            <Navbar/>
            {props.children}
        </React.Fragment>
    );
  }

  export default Layout;