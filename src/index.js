import formpanel from './modules/Form';
import loadingpanel from './modules/Loading';
import displaypanel from './modules/Display';

const contentDiv = document.querySelector('#content');

contentDiv.appendChild(formpanel.getForm());
contentDiv.appendChild(loadingpanel.getLoading());

const formDiv = document.querySelector('#form');
formDiv.addEventListener('submit', displaypanel.displayData);
