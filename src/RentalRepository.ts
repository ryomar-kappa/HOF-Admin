import { collection, getDocs } from "firebase/firestore";
import { db } from "./FireBase";
import Rental from "./Rental";


const fetchRental = async (): Promise<Rental[]> => {
  const booksCollectionRef = collection(db, "rental");
  const querySnapshot = await getDocs(booksCollectionRef);
  const rentalList: Rental[] = [];

  querySnapshot.docs.forEach((doc) => {
    const data = doc.data();
    const hrid: string = data.hrid;
    const isbn: string = data.isbn;
    const rental = new Rental(hrid, isbn);
    rentalList.push(rental);
  });

  return rentalList;
};

export default fetchRental;