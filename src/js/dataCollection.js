const dataCollertion = (() => {
  const proxyUrl = 'https://yacdn.org/proxy/';
  const locationUrl = 'https://www.metaweather.com/api/location/search/?';
  const getData = async (city, initialLoad) => {
    const weatherFetchUrl = 'https://www.metaweather.com/api/location/';
    const loacationInfo = fetch(`${proxyUrl + locationUrl}query=${city}`).then((data) => data.json());
    const weatherData = await loacationInfo.then((d) => fetch(proxyUrl + weatherFetchUrl + d[0].woeid)).then((d) => d.json()).catch(() => {
      if (initialLoad) {
        alert('Could not load current city!');
      }
      alert('City not found!');
    });
    return weatherData;
  };
  const getCurrentCity = async (latitude, longitude) => {
    const city = await fetch(`${proxyUrl + locationUrl}lattlong=${latitude},${longitude}`);
    const result = await city.json();
    return result;
  };

  const getCoordinates = () => new Promise(((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  }));

  const getCurrentLocation = async () => {
    const position = await getCoordinates();
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    const city = getCurrentCity(latitude, longitude).then(data => (data[0].title));
    return city;
  };
  return {
    getData,
    getCurrentLocation,
    getCurrentCity,
  };
})();
export default dataCollertion;
