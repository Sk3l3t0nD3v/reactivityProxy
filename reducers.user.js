let initialState = {};
const reducers = [
  () => {
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
  },
  () => {
    const el = (document.getElementById('users').innerHTML = `
    <ul>
				${initialState.data.users
          .map(function (u) {
            return `<li onclick=removeItem(${u.id})>${u.name}</li>`;
          })
          .join('')}
		</ul>
    `);
  },
];

const useState = (state) => (initialState = state);

export default { reducers, useState };
