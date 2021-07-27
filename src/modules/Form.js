const formpanel = (() => {
  const formDiv = document.createElement('form');
  const initialisePanel = () => {
    formDiv.setAttribute('id', 'form');
    const input = document.createElement('input');
    input.placeholder = 'Enter City...';
    input.setAttribute('id', 'form-input');
    formDiv.appendChild(input);
    const btn = document.createElement('button');
    btn.type = 'submit';
    btn.setAttribute('id', 'form-button');
    btn.innerText = 'get';
    formDiv.appendChild(btn);
  };
  const getForm = () => formDiv;
  const getInputValue = () => {
    const div = document.querySelector('#form-input');
    return div.value;
  };
  const setInputValue = (value) => {
    const div = document.querySelector('#form-input');
    div.value = value;
  };
  return {
    initialisePanel, getForm, getInputValue, setInputValue,
  };
})();

formpanel.initialisePanel();

export default formpanel;
