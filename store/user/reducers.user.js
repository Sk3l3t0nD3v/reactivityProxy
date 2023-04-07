let initialState = {};

const todos = () => {
  console.log('reducers todo');
  const el = (document.getElementById('todo').innerHTML = `
 <h1>${initialState.data.message}</h1>
     <ul>
       ${initialState.data.todos
         .map(function (todo) {
           return `<li>${todo}</li>`;
         })
         .join('')}
     </ul>
 `);
};

const users = () => {
  console.log('reducers users');
  const el = (document.getElementById('users').innerHTML = `
 <ul>
         ${initialState.data.users
           .map(function (u) {
             return `<li onclick=removeItem(${u.id})>${u.name}</li>`;
           })
           .join('')}
   </ul>
 `);
};

const reducers = [todos, users];

const useState = (state) => (initialState = state);

export default { reducers, useState };
