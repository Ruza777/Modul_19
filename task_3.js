/* 
Напишите функцию, которая создает пустой объект, но без прототипа.
*/


function newEmptyObject () {

    return Object.create(null);
}