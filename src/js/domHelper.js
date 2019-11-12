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
    // <div class="switch">
    //               <label>
    //                 <span class="blue-text darken-4">C</span>
    //                 <input type="checkbox">
    //                 <span class="lever"></span>
    //                 <span class="blue-text darken-4">F</span>
    //               </label>
    //                 </div>
    //             </div>
    const switchContent = document.createElement('div');
    switchContent.classList.add('switch');
    const labelContainer = document.createElement('label');
    const celciousTag = document.createElement('span');
    celciousTag.classList.add('blue-text', 'darken-4');
    celciousTag.innerText = 'C';
    const checkboxContainer = document.createElement('input');

  };
  const renderTodaysContainer = () => {
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
