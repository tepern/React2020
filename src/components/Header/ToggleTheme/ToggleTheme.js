import React, { Component } from 'react';
import { ThemeContext } from '../../../theme-context/ThemeContext';

class ToggleTheme extends Component {

    render() {
        return (
            <ThemeContext.Consumer>{(context) => {
                return (
                   <div className="toggle-box">
                      <button className="toggle__btn btn" onClick={context.toggleTheme}>Toggle theme</button>
                   </div>
                )
            }}</ThemeContext.Consumer>
        )
    }
}

export default ToggleTheme;