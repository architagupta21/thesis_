import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

class SideMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Link type="button" to="/">
                    Main Page
                </Link>
                <Link type="button" to="/dataentry">
                    Data Entry
                </Link>
                <Link type="button" to="/analytics">
                    Analytics
                </Link>
                <Link type="button" to="/settings">
                    Settings
                </Link>
            </div>
        );
    }
}

export default withRouter(SideMenu);
