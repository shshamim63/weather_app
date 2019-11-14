import dataCollection from './dataCollection.js';

const eventListener = (() => {
  const enableSearch = () => {
    const searchbox = document.querySelector('#search');
    searchbox.addEventListener('keypress', (e) => {
      const key = e.which || e.keyCode;
      if (key === 13) {
        const city = searchbox.value;
        dataCollection.getData(city);
      }
    });
  };
  return {
    enableSearch,
  };
})();
export default eventListener;
