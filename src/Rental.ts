class Rental {
    private readonly hrid:string;
    private readonly isbn:string;
    constructor(hrid:string,isbn:string) {
        this.hrid = hrid;
        this.isbn = isbn;
    }

  getHrid(): string {
    return this.hrid;
  }

  getIsbn(): string{
    return this.isbn;
  }

}

export default Rental