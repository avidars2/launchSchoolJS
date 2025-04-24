function Book(title, author, read=false) {
    return {
        title,
        author,
        read,

        getDescription() {
            return `${this.title} was written by ${this.author}. I ${this.read ? 'have' : "haven't"} read it.`;
        },
        readBook() {
            this.read = true;
        }
    }
}

let mythos = Book('Mythos', 'Stephen Fry');
let talkPretty = Book('Me Talk Pretty One Day', 'David Sedaris');
let aunts = Book("Aunts aren't Gentlemen", 'PG Wodehouse');

console.log(mythos.getDescription());  // "Mythos was written by Stephen Fry."
console.log(talkPretty.getDescription());  // "Me Talk Pretty One Day was written by David Sedaris."
aunts.readBook();
console.log(aunts.getDescription());  // "Aunts aren't Gentlemen was written by PG Wodehouse"