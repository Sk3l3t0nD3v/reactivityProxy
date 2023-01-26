export default class App {
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
    if(Array.isArray(fn))
      this.callback.push(...fn)
    else
    this.callback.push(fn)
  } 
  notify(){
    this.callback.forEach(fn => fn())
  }

}
