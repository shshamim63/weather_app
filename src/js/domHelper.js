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
    switchContent.appendChild(labelContainer);
    return switchContent;
  };
  const imagePortion = (iconType) => {
    const weatherImage = document.createElement('img');
    weatherImage.setAttribute('src', `https://www.metaweather.com/static/img/weather/png/${iconType}.png`);
    return weatherImage;
  };
  const renderAdditionalInfoToday = (maxtemp, mintemp, humidity, speed) => {
    const additionalInfoTodayContainer = document.createElement('div');
    additionalInfoTodayContainer.classList.add('col', 's6');
    const listContainer = document.createElement('ul');
    listContainer.classList.add('collection');
    const maxContainer = document.createElement('li');
    maxContainer.classList.add('collection-item');
    maxContainer.innerText = `Max Temp: ${Math.ceil(maxtemp)} °C`;

    const minContainer = document.createElement('li');
    minContainer.classList.add('collection-item');
    minContainer.innerText = `Min Temp: ${Math.ceil(mintemp)} °C`;
    const humidityContainer = document.createElement('li');
    humidityContainer.classList.add('collection-item');
    humidityContainer.innerText = `Relative Humidity: ${humidity.toFixed(2)}%`;
    const windContainer = document.createElement('li');
    windContainer.classList.add('collection-item');
    windContainer.innerText = `Wind speed: ${speed.toFixed(2)}m/s`;

    listContainer.appendChild(maxContainer);
    listContainer.appendChild(minContainer);
    listContainer.appendChild(humidityContainer);
    listContainer.appendChild(windContainer);
    return additionalInfoTodayContainer.appendChild(listContainer);
  };
  const renderTodaysContainer = (renderdata) => {
    console.log(renderdata);
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
    const cityportion = insertCityName(renderdata[0]);
    const imagePortionrender = imagePortion(renderdata[1][0].weather_state_abbr);
    const dateportion = insertdate(renderdata[1][0].applicable_date);
    const switchportion = switchContainer();
    const additionalView = renderAdditionalInfoToday(
      renderdata[1][0].max_temp,
      renderdata[1][0].min_temp,
      renderdata[1][0].humidity,
      renderdata[1][0].wind_speed,
    );
    infoContainer.appendChild(cityportion);
    infoContainer.appendChild(dateportion);
    infoContainer.appendChild(switchportion);
    infoContainer.appendChild(imagePortionrender);
    cardContent.appendChild(infoContainer);
    cardContent.appendChild(additionalView);
    cardContainer.appendChild(cardContent);
    todaydivColumn.appendChild(cardContainer);
    todaydivRow.appendChild(todaydivColumn);
    todayContainer.appendChild(todaydivRow);
    document.querySelector('.weather-body').appendChild(todayContainer);
  };
  return {
    renderTodaysContainer,
  };
})();
export default displayTemparature;
