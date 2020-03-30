import 'core-js/stable';
import 'regenerator-runtime/runtime';
import '../main.scss';
import dataCollection from './dataCollection';
import eventListener from './eventListener';

const currentCity = dataCollection.getCurrentLocation();
eventListener.enableSearch();
