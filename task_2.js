/*
Напишите функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет, 
есть ли у переданного объекта свойство с данным именем.
Функция должна возвращать true или false.
*/
function hasObjectStringProperty_1 (string,object) {
 
    return object.hasOwnProperty(string);

}

function hasObjectStringProperty_2 (string,object) {
 
    return string in object;

}
