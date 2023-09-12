// const categoryEl = document.querySelector("#categories");
// const itemEl = categoryEl.querySelectorAll(".item");
// console.log(itemEl.length);

// itemEl.forEach(item => {
//     const titleEl = item.querySelector("h2").textContent;
//     const numberItemsEL = item.querySelectorAll("li").length;
//     console.log(titleEl);
//     console.log(numberItemsEL);
// });


const categoryEl = document.querySelector("#categories");
const itemEl = categoryEl.children;
console.log(itemEl.length);

for (const item of itemEl) {
    const titleEl = item.firstElementChild.textContent;
    const numberItemsEL = item.lastElementChild.children.length;
    console.log(titleEl);
    console.log(numberItemsEL);
}

