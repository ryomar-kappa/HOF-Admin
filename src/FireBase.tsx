import { FirebaseApp, initializeApp } from "firebase/app";
import {
  Firestore,
  collection,
  doc,
  getDocs,
  getFirestore,
  setDoc,
} from "firebase/firestore";
import Book from "./Book";
const firebaseConfig = {
  apiKey: "AIzaSyAiarwGgS6LUaGOm-xncqKgEMWwNBulO4U",
  authDomain: "hofapp-8aaaf.firebaseapp.com",
  databaseURL:
    "https://hofapp-8aaaf-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hofapp-8aaaf",
  storageBucket: "hofapp-8aaaf.appspot.com",
  messagingSenderId: "1026767381466",
  appId: "1:1026767381466:web:63102b830d4970c67496e3",
  measurementId: "G-RLM9WSG27H",
};

const app: FirebaseApp = initializeApp(firebaseConfig);

async function fetchBooks(): Promise<void> {
  const booksCollectionRef = collection(db, "books");
  const querySnapshot = await getDocs(booksCollectionRef);

  querySnapshot.docs.forEach((doc) => {
    const data = doc.data();
    const title: string = data.title;
    const author: string = data.author;
    const publisher: string = data.publisher;
    console.log(title);
    console.log("author", author);
    console.log("publisher", publisher);
  });
}

const addBook = async (book: Book) => {
  await setDoc(doc(db, "books", book.getTitle()), {
    title: book.getTitle(),
    author: book.getAuthor(),
    publisher: book.getPublisher(),
  });
};
export const db: Firestore = getFirestore(app);
export default addBook;
