/* Напиши скрипт, який:

Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст
заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).


В результаті, в консолі будуть виведені наступні повідомлення.

Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5 */

const mainListRef = document.querySelector('#categories');
console.log(`Number of categories: ${mainListRef.children.length}`);

const firstItemRef = document.querySelector('.item');

const firstCategoryTitle = firstItemRef.firstElementChild;
console.log(`Category: ${firstCategoryTitle.textContent}`);

const firstListOfElements = firstCategoryTitle.nextElementSibling;
console.log(`Elements: ${firstListOfElements.children.length}`);

const secondItemRef = firstItemRef.nextElementSibling;

const secondCategoryTitle = secondItemRef.firstElementChild;
console.log(`Category: ${secondCategoryTitle.textContent}`);

const secondListOfElements = secondCategoryTitle.nextElementSibling;
console.log(`Elements: ${secondListOfElements.children.length}`);

const thirdItemRef = secondItemRef.nextElementSibling;

const thirdCategoryTitle = thirdItemRef.firstElementChild;
console.log(`Category: ${thirdCategoryTitle.textContent}`);

const thirdListOfElements = thirdCategoryTitle.nextElementSibling;
console.log(`Elements: ${thirdListOfElements.children.length}`);

