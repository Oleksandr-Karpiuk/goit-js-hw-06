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

const firstCategoryTitleRef = firstItemRef.firstElementChild;
console.log(`Category: ${firstCategoryTitleRef.textContent}`);

const firstListOfElementsRef = firstCategoryTitleRef.nextElementSibling;
console.log(`Elements: ${firstListOfElementsRef.children.length}`);

const secondItemRef = firstItemRef.nextElementSibling;

const secondCategoryTitleRef = secondItemRef.firstElementChild;
console.log(`Category: ${secondCategoryTitleRef.textContent}`);

const secondListOfElementsRef = secondCategoryTitleRef.nextElementSibling;
console.log(`Elements: ${secondListOfElementsRef.children.length}`);

const thirdItemRef = secondItemRef.nextElementSibling;

const thirdCategoryTitleRef = thirdItemRef.firstElementChild;
console.log(`Category: ${thirdCategoryTitleRef.textContent}`);

const thirdListOfElementsRef = thirdCategoryTitleRef.nextElementSibling;
console.log(`Elements: ${thirdListOfElementsRef.children.length}`);

