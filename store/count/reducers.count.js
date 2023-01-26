let initialState = {};
const reducers = [
  () =>
    (document.querySelector(
      '#totale'
    ).innerHTML = `${initialState.data.items.reduce(
      (a, { value }) => +a + +value,
      0
    )}`),
  () => {
    document.querySelector('#list').innerHTML = `
      <ul>
        ${initialState.data.items
          .map(
            (i) => `
          <li onclick=removeItemCount(${i.id})>${i.value}</li>
        `
          )
          .join('')}
      </ul>
    `;
  },
  () =>
  {
    const el = document.querySelector('#totale');
    const totale =initialState.data.items.reduce(
      (a, { value }) => +a + +value,
      0
    );
    el.style.color = totale > 1000 ? 'red' : 'black';

  },
];

const useState = (state) => (initialState = state);

export default { reducers, useState };
