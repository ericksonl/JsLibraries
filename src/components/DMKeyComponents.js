import Heater1 from './mp3Files/Heater-1.mp3';
import Heater2 from './mp3Files/Heater-2.mp3';
import Heater3 from './mp3Files/Heater-3.mp3';
import Heater4 from './mp3Files/Heater-4.mp3';
import Clap from './mp3Files/Clap.mp3';
import OpenHH from './mp3Files/Open-Hat.mp3';
import KicknHat from './mp3Files/Kick_n_Hat.mp3';
import Kick from './mp3Files/Kick.mp3';
import ClosedHH from './mp3Files/Closed-Hat.mp3';

const KeyComponents = [{
    keyTrigger: 'Q',
    keyCode: 81,
    id: 'Heater-1',
    url: Heater1
},
{
    keyTrigger: 'W',
    keyCode: 87,
    id: 'Heater-2',
    url: Heater2
},
{
    keyTrigger: 'E',
    keyCode: 69,
    id: 'Heater-3',
    url: Heater3
},
{
    keyTrigger: 'A',
    keyCode: 65,
    id: 'Heater-4',
    url: Heater4
},
{
    keyTrigger: 'S',
    keyCode: 83,
    id: 'Clap',
    url: Clap
},
{
    keyTrigger: 'D',
    keyCode: 68,
    id: 'Open-HH',
    url: OpenHH
},
{
    keyTrigger: 'Z',
    keyCode: 90,
    id: 'Kick-n-Hat',
    url: KicknHat
},
{
    keyTrigger: 'X',
    keyCode: 88,
    id: 'Kick',
    url: Kick
},
{
    keyTrigger: 'C',
    keyCode: 67,
    id: 'Closed-HH',
    url: ClosedHH
}]

export default KeyComponents;