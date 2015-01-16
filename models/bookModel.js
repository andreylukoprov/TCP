/**
 * Created by AndreyLukoprov on 1/12/2015.
 */
function BookModel(book, author) {
    this.title = book.title;
    this.price = book.price;
    this.description = book.description;
    this._id = book._id;
    this.dateOfPublication = book.dateOfPublication;
    this.category = book.category;
    this.publishingHouse = book.publishingHouse;

    this.author = author;
}

module.exports = BookModel;