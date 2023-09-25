export interface book {
  bookId: number;
  title: string;
  author: string;
  category: string;
  price: number;
  coverFileName: string;
  qty: number;
}

export interface cartbook {
  book: book;
  quantity: number;
}
