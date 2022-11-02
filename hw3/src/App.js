import logo from './logo.svg';
import './HW2.css';
import Tom1 from './item-components/tom1';
import Tom2 from './item-components/tom2';
import Tom3 from './item-components/tom3';
import Tom4 from './item-components/tom4';
import KickBass from './item-components/kickbass';
import Crash from './item-components/crash';
import Snare from './item-components/snare';
import DrumKitList from './list-components/drumkit'
function App() {
  return (
      <div>
          <center>
              <h1>Drum 🥁 Kit</h1>
          </center>

        <DrumKitList></DrumKitList>
      </div>

  );
}

export default App;
