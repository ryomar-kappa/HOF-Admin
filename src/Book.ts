class Book {
  private title: string;
  private author: string;
  private publisher: string;

  constructor(title: string, author: string, publisher: string) {
    this.title = title;
    this.author = author;
    this.publisher = publisher;
  }

  getTitle(): string {
    return this.title;
  }

  getAuthor(): string {
    return this.author;
  }

  getPublisher(): string {
    return this.publisher;
  }
}

export default Book;