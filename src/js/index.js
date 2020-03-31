import 'core-js/stable';
import 'regenerator-runtime/runtime';
import '../main.scss';
import dataCollection from './dataCollection';
import eventListener from './eventListener';
import displayTemparature from './domHelper';

dataCollection.getCurrentLocation().then(data => {
  dataCollection.getData(data, true).then((result) => {
    document.querySelector('.weather-body').innerHTML = '';
    displayTemparature.renderTodaysContainer([result.title, result.consolidated_weather.slice(0, 5)]);
  });
});

eventListener.enableSearch();
