
import App from './app.js'

const data = {
  message:"hello world",
  todos:['uno','due'],
  users:[]
};

const myApp= new App(data)


const render =()=>{
  //document.getElementById('app').innerHTML=data.message
  const el = document.getElementById('todo').innerHTML=`
  <h1>${data.message}</h1>
			<ul>
				${data.todos.map(function (todo) {
					return `<li>${todo}</li>`;
				}).join('')}
			</ul>
  `;

};
myApp.subscribe(render);


myApp.data.message="ciao"

myApp.data.todos.push('sposop')
myApp.subscribe(
  ()=>{
    
    const el = document.getElementById('users').innerHTML=`
    <ul>
				${data.users.map(function (u) {
					return `<li onclick=removeItem(${u.id})>${u.name}</li>`;
				}).join('')}
		</ul>
    `
  }
)
window.removeItem =(id)=>{
  myApp.data.users=myApp.data.users.filter(u => u.id != id)
}
document.querySelector('#load')
.addEventListener('click',
()=>{
  const users= fetch('https://jsonplaceholder.typicode.com/users').then(r => r.json()).then(u => myApp.data.users = u)
})

/* COUNT APP */


const appCount = new App({
  items:[]
});

const cb=[
  ()=>document.querySelector('#totale').innerHTML=`${appCount.data.items.reduce((a,{value})=> +a + +value,0)}`,
  ()=>{
    document.querySelector('#list').innerHTML=`
      <ul>
        ${appCount.data.items.map(i => `
          <li onclick=removeItemCount(${i.id})>${i.value}</li>
        `).join('')}
      </ul>
    `
  }
]
appCount.subscribe(cb)


document.querySelector('#input').addEventListener('change',(e)=>{
  const id = Math.random() * 10
  appCount.data.items.push({id,value:e.target.value})
  e.target.value=''
})

window.removeItemCount =(id)=>{
  appCount.data.items=appCount.data.items.filter(u => u.id != id)
}
