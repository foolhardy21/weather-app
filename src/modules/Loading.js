const loadingpanel = (() => {
  const loading = document.createElement('div');
  const initialisePanel = () => {
    loading.innerText = 'Loading...';
    loading.setAttribute('id', 'loading-text');
    loading.style.display = 'none';
  };
  const getLoading = () => loading;
  const showPanel = () => {
    const panel = document.querySelector('#loading-text');
    panel.style.display = 'block';
  };
  const hidePanel = () => {
    const panel = document.querySelector('#loading-text');
    panel.style.display = 'none';
  };
  return {
    initialisePanel, getLoading, showPanel, hidePanel,
  };
})();

loadingpanel.initialisePanel();

export default loadingpanel;
