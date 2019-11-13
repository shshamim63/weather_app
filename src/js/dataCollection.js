const dataCollertion = (() => {
  const getData = async (city) => {
    const proxyUrl = 'https://yacdn.org/proxy/';
    const locationUrl = `https://www.metaweather.com/api/location/search/?query=${city}`;
    const weatherFetchUrl = 'https://www.metaweather.com/api/location/';
    const loacationInfo = fetch(proxyUrl + locationUrl).then((data) => data.json());
    console.log(loacationInfo);
  };
  return {
    getData,
  };
})();
export default dataCollertion;
