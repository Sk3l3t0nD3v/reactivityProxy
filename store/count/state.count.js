import SkelX from '../app.js';
import countState from './reducers.count.js';


const appCount = new SkelX({
  items: [],
});

//state management
countState.useState(appCount);
appCount.subscribe(countState.reducers);

//events
document.querySelector('#input').addEventListener('change', (e) => {
  const id = Math.random() * 10;
  appCount.data.items.push({ id, value: e.target.value });
  e.target.value = '';
});
window.removeItemCount = (id) => {
  appCount.data.items = appCount.data.items.filter((u) => u.id != id);
};
