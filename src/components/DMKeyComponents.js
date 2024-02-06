import Heater1 from './mp3Files/Heater-1.mp3';
import Heater2 from './mp3Files/Heater-2.mp3';
import Heater3 from './mp3Files/Heater-3.mp3';
import Heater4 from './mp3Files/Heater-4.mp3';
import Clap from './mp3Files/Clap.mp3';
import OpenHH from './mp3Files/Open-Hat.mp3';
import KicknHat from './mp3Files/Kick_n_Hat.mp3';
import Kick from './mp3Files/Kick.mp3';
import ClosedHH from './mp3Files/Closed-Hat.mp3';

const KeyComponents = {
    Heater1: {
        keyTrigger: 'Q',
        id: 'Heater-1',
        url: Heater1
    },
    Heater2: {
        keyTrigger: 'W',
        id: 'Heater-2',
        url: Heater2
    },
    Heater3: {
        keyTrigger: 'E',
        id: 'Heater-3',
        url: Heater3
    },
    Heater4: {
        keyTrigger: 'A',
        id: 'Heater-4',
        url: Heater4
    },
    Clap: {
        keyTrigger: 'S',
        id: 'Clap',
        url: Clap
    },
    OpenHH: {
        keyTrigger: 'D',
        id: 'Open-HH',
        url: OpenHH
    },
    KicknHat: {
        keyTrigger: 'Z',
        id: 'Kick-n-Hat',
        url: KicknHat
    },
    Kick: {
        keyTrigger: 'X',
        id: 'Kick',
        url: Kick
    },
    ClosedHH: {
        keyTrigger: 'C',
        id: 'Closed-HH',
        url: ClosedHH
    }
}

export default KeyComponents;