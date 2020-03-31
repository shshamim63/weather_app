import dataCollection from './dataCollection';
import displayTemparature from './domHelper';

const eventListener = (() => {
  const enableSearch = () => {
    const searchbox = document.querySelector('#search');
    searchbox.addEventListener('keypress', (e) => {
      const key = e.which || e.keyCode;
      if (key === 13) {
        e.preventDefault();
        const city = searchbox.value;
        document.querySelector('#city-input').reset();
        dataCollection.getData(city, false).then((data) => {
          document.querySelector('.weather-body').innerHTML = '';
          displayTemparature.renderTodaysContainer([data.title, data.consolidated_weather.slice(0, 5)]);
        });
      }
    });
  };
  return {
    enableSearch,
  };
})();
export default eventListener;
