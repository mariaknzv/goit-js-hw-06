const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector('ul#ingredients');

const items = ingredients.map(ingredient => {
  const itemEl = document.createElement('li');
  itemEl.textContent = ingredient;
  itemEl.classList.add('ingredient');

  return itemEl;
});
console.log(items);

ingredientsListEl.append(...items);
console.log(ingredientsListEl);