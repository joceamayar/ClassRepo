// TODO: Add a comment explaining role of the index.js file and import statements

// Is importing our files togather, anything we are not using it gets thrown away. this syntax is use and require is not accepted when usign webpack

import { boxClick } from './box';
import { headerClick } from './header';

document.getElementById('boxBtn').addEventListener('click', boxClick);
document.getElementById('headerBtn').addEventListener('click', headerClick);
