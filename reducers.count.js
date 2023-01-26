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
];

const useState = (state) => (initialState = state);

export default { reducers, useState };
