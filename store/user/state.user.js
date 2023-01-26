import SkelX from '../app.js';
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
    () =>
    {
      const loader = document.querySelector('#container-loader')
        loader.style.display = 'block'
      const users = fetch('https://jsonplaceholder.typicode.com/users')
        .then(r => r.json())
        .then(u => myApp.data.users = u)
        .finally(() => {
          loader.style.display = 'none'
        });
})
