const dataCollertion = (() => {
  const proxyUrl = 'https://yacdn.org/proxy/';
  const locationUrl = 'https://www.metaweather.com/api/location/search/?';
  const getData = async (city) => {
    const weatherFetchUrl = 'https://www.metaweather.com/api/location/';
    const loacationInfo = fetch(`${proxyUrl + locationUrl}query=${city}`).then((data) => data.json());
    const weatherData = await loacationInfo.then((d) => fetch(proxyUrl + weatherFetchUrl + d[0].woeid)).then((d) => d.json()).catch(() => alert('City not found!'));
    return weatherData;
  };
  const getCurrentLocation = () => {
    let cityName;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        const currentCity = fetch(`${proxyUrl + locationUrl}lattlong=${latitude},${longitude}`).then((data) => data.json());
        currentCity.then(data => { cityName = data[0].title; console.log(cityName); });
      });
    }
    return cityName;
  };
  return {
    getData,
    getCurrentLocation,
  };
})();
export default dataCollertion;
