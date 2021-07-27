const apidata = (() => {
  const getData = async (city) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7252148aacbeb1a9bc88991a6e17694d`,
      { mode: 'cors' });
    const data = await response.json();
    return data;
  };

  return { getData };
})();

export default apidata;
