const user = {
  name: "Stan",
  number: 23,
};

const book1 = {
  title: "El Medico",
  author: "Noah Gordon",
  isbn: 989898,
  category: "Classic Literature",
};

const book2 = {
  title: "Horus Heresy",
  author: "Dan Abnett",
  isbn: 979797,
  category: "SciFi",
};

user.books = [];

user.books.push(book1, book2);

const library = [];

library.push(user);

const book3 = {
  title: "Ejemplo",
  author: "Random",
  isbn: 999999,
  category: "Patata",
};

library[0].books.push(book3);

for (const user of library) {
  console.log(user.name);
  for (const book of user.books) {
    console.log(book.title, book.author);
  }
}
