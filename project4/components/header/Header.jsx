import React from 'react';
import './Header.css'
import image from '../../images/background.jpg'

// To compile Header.jsx or other jsx files:
//      1. create a header.jsx file in the root dir
//      2. add the header.jsx file dir to the webpack.config.js
//      3. add code to the header.jsx file (open the file to view the code)
//      4. run 'npm run build' command
//      5. you will see the compiled code in the compiled folder

class Header extends React.Component {
    render() {
        return (
            <header style={{background: 'url(https://res.cloudinary.com/dgnwtkolg/image/upload/v1667453289/background_njfshb.jpg)'}}>
                <div className="overlay">
                    <h1>Le Thi Kim Chi</h1>
                    <h3>I am a UIT student</h3>
                    <p>Le Thi Kim Chi</p>
                    <br/>
                        <button>READ MORE</button>
                </div>
            </header>
        );
    }
}

export default Header;
