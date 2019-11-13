const dataCollertion = (() => {
  const getData = async (city) => {
    const proxyUrl = 'https://yacdn.org/proxy/';
    const locationUrl = `https://www.metaweather.com/api/location/search/?query=${city}`;
    const weatherFetchUrl = 'https://www.metaweather.com/api/location/';
    const loacationInfo = fetch(proxyUrl + locationUrl).then((data) => data.json());
    const weatherData = await loacationInfo.then((d) => fetch(proxyUrl + weatherFetchUrl + d[0].woeid)).then((d) => d.json()).catch(() => console.log('City not found!'));
    console.log(weatherData);
  };
  return {
    getData,
  };
})();
export default dataCollertion;
