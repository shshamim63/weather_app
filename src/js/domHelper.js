const displayTemparature = (() => {
  const insertCityName = (cityName) => {
    const cityNameContainer = document.createElement('span');
    cityNameContainer.classList.add('card-title');
    cityNameContainer.innerText = cityName;
    return cityNameContainer;
  };
  const insertdate = (currentdate) => {
    const dateContainer = document.createElement('p');
    dateContainer.innerText = currentdate;
    return dateContainer;
  };
  const switchContainer = () => {
    const switchContent = document.createElement('div');
    switchContent.classList.add('switch');
    const labelContainer = document.createElement('label');
    const celciousTag = document.createElement('span');
    celciousTag.classList.add('blue-text', 'darken-4');
    celciousTag.innerText = 'C';
    const checkboxContainer = document.createElement('input');
    checkboxContainer.setAttribute('type', 'checkbox');
    checkboxContainer.value = 'C';
    const leverContainer = document.createElement('span');
    leverContainer.classList.add('lever');
    const farenhiteTag = document.createElement('span');
    farenhiteTag.classList.add('blue-text', 'darken-4');
    farenhiteTag.innerText = 'F';

    labelContainer.appendChild(celciousTag);
    labelContainer.appendChild(checkboxContainer);
    labelContainer.appendChild(leverContainer);
    labelContainer.appendChild(farenhiteTag);
    return switchContent.appendChild(labelContainer);
  };
  const renderadditionalInfoToday = (maxtemp, mintemp, humidity, speed) => {
    const additionalInfoTodayContainer = document.createElement('div');
    additionalInfoTodayContainer.classList.add('col', 's6');
    const listContainer = document.createElement('ul');
    listContainer.classList.add('collection');
    const maxContainer = document.createElement('li');
    maxContainer.classList.add('collection-item');
    maxContainer.innerText = `Max Temp: ${maxtemp} °C`;

    const minContainer = document.createElement('li');
    minContainer.classList.add('collection-item');
    minContainer.innerText = `Min Temp: ${mintemp} °C`;
    const humidityContainer = document.createElement('li');
    humidityContainer.classList.add('collection-item');
    humidityContainer.innerText = `Relative Humidity: ${humidity}%`;
    const windContainer = document.createElement('li');
    windContainer.classList.add('collection-item');
    windContainer.innerText = `Wind speed: ${speed}m/s`;

    listContainer.appendChild(maxContainer);
    listContainer.appendChild(minContainer);
    listContainer.appendChild(humidityContainer);
    listContainer.appendChild(windContainer);
    return additionalInfoTodayContainer.appendChild(listContainer);
  };
  const renderTodaysContainer = () => {
    const todayContainer = document.createElement('div');
    todayContainer.classList.add('weather');
    const todaydivRow = document.createElement('div');
    todaydivRow.classList.add('today', 'row');

    const todaydivColumn = document.createElement('div');
    todaydivColumn.classList.add('col', 's8', 'offset-s2');

    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card');

    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content', 'row');

    const infoContainer = document.createElement('div');
    infoContainer.classList.add('info', 'col', 's6');
  };
  return {
    renderTodaysContainer,
  };
})();
export default displayTemparature;
