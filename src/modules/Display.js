import formpanel from './Form';
import loadingpanel from './Loading';
import apidata from './Data';

const displaypanel = (() => {
// send the value to data.js

  const displayData = async (e) => {
    e.preventDefault();
    const cityname = formpanel.getInputValue();
    if (!cityname) {
      console.log('nothing');
    } else {
      loadingpanel.showPanel();
      formpanel.setInputValue('');
      const data = await apidata.getData(cityname);
      const { description } = data.weather[0];
      const { temp } = data.main;
      const text = document.createElement('div');
      text.innerText = `${description} ${temp}`;
      loadingpanel.hidePanel();

      document.querySelector('#content').appendChild(text);
    }
  };

  return { displayData };
})();

export default displaypanel;
