/**
 * Created by AndreyLukoprov on 1/22/2015.
 */
function cart() {
    this.books = [];
    this.addToCart = function (id) {
        var book = new cartModel(id);
        
        if (findIndex(this.books, id) == -1) {
            this.books.push(book);
        }
        else {
            for (var i = 0; i < this.books.length; i++) {
                if (this.books[i].id == book.id) {
                    this.books[i].amount += 1;
                }
            }
        }
    };
    
    this.removeFromCart = function (id) {
        for (var i = 0; i < this.books.length; i++) {
            if (this.books[i].id == id) {
                this.books[i].amount -= 1;
                if (this.books[i].amount == 0) {
                    this.books.splice(i, 1);
                }
            }
        }
    };

};

function cartModel(id) {
    this.id = id;
    this.amount = 1;
};

function findIndex(array, id) {
    for (var i = 0; i < array.length; i++) {
        if (array[i].id == id) {
            return i;
        }
    }
    return -1;
};
module.exports = cart;