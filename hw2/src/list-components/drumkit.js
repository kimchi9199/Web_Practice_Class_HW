import React, {Component} from "react";
import Tom1 from '../item-components/tom1';
import Tom2 from '../item-components/tom2';
import Tom3 from '../item-components/tom3';
import Tom4 from '../item-components/tom4';
import KickBass from '../item-components/kickbass';
import Crash from '../item-components/crash';
import Snare from '../item-components/snare';

export default class DrumKitList extends Component{

    render() {
        return (
            <div id='app'>
                <div className='keys'>
                    <Tom1></Tom1>
                    <Tom2></Tom2>
                    <Tom3></Tom3>
                    <Tom4></Tom4>
                    <KickBass></KickBass>
                    <Crash></Crash>
                    <Snare></Snare>
                </div>
            </div>
        )

    }
}