
class App {
  constructor(data){
    this.data=  this.initProxy(data);
    this.callback=[];
  
  }

  initProxy(data){
    return new Proxy(data,{
      set:(target,prop,value) =>{
        
        
                  target[prop] = value;
                  this.notify();
                  return true;
      },
      get:(target,prop)=>{
        if (['[object Object]', '[object Array]'].indexOf(Object.prototype.toString.call(target[prop])) > -1) {
          return  this.initProxy(target[prop]);
        }
        return target[prop];
      }
    })
  }

  subscribe(fn){
    this.callback.push(fn)
  }
  notify(){
    this.callback.forEach(fn => fn())
  }

}

const data = {
  message:"hello world",
  todos:['uno','due']
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

/* setInterval(function(){

myApp.data.todos.push('dd')
},2000) */
