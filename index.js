import SkelX from './app.js';
import countState from './reducers.count.js';
import userState from './reducers.user.js';

const data = {
  message:"hello world",
  todos:['uno','due'],
  users:[]
};

const myApp= new SkelX(data)

userState.useState(myApp);
myApp.subscribe(userState.reducers);


myApp.data.message="ciao"
myApp.data.todos.push('sposop')


//events
window.removeItem =(id)=>{
  myApp.data.users=myApp.data.users.filter(u => u.id != id)
}
document.querySelector('#load')
.addEventListener('click',
()=>{
  const users= fetch('https://jsonplaceholder.typicode.com/users').then(r => r.json()).then(u => myApp.data.users = u)
})

/* COUNT APP */

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
