"use strict";

/*
###Задание 1
Необходимо создать класс Library. Конструктор класса, должен принимать начальный 
список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив 
не содержит дубликатов; в противном случае необходимо выбросить ошибку.

1. Класс должен содержать приватное свойство #books.
2. Реализуйте геттер allBooks, который возвращает текущий список книг.
3. Реализуйте метод addBook(title), который позволяет добавлять книгу в список. 

Если книга с таким названием уже существует в списке, выбросьте ошибку с 
соответствующим сообщением.

4. Реализуйте метод removeBook(title), который позволит удалять книгу из списка 
по названию. Если книги с таким названием нет в списке, выбросьте ошибку с 
соответствующим сообщением.

5. Реализуйте метод hasBook(title), который будет проверять наличие книги в 
библиотеке и возвращать true или false в зависимости от того, есть ли такая 
книга в списке или нет.
*/

class Library {
    #books;
    constructor(books){
        this.#books = [];
        if(books.length !== new Set(books).size){
            throw new Error('Массив содержит дубликаты') 
        }
        this.#books = books;
    }

    getAllBooks(){
        return(
            this.#books
        );
    }

    addBook(title){
        if(this.hasBook(title)){
            throw new Error('Книга с таким названием уже существует');
        }
        this.#books.push(title); 
    }

    removeBook(title){
        const index = this.#books.indexOf(title);

        if(index === -1){
            throw new Error('Книга с таким названием не существует');
        }

        this.#books.splice(index, 1);
    }

    hasBook(title){
        return(
            this.#books.includes(title)
        );
    }
}

const a = new Library(['book1','book2']);
console.log(a.getAllBooks());
a.addBook('book');
console.log(a.getAllBooks());
a.removeBook('book1');
console.log(a.hasBook('book1'));
console.log(a.getAllBooks());