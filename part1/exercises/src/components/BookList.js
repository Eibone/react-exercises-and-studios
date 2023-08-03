import classes from './BookList.module.css';

export default function BookList() {
   let pageTitle = "Best Sellers";
   let book1 = "https://storage.googleapis.com/du-prd/books/images/9781649374042.jpg";
   let book2 = "https://storage.googleapis.com/du-prd/books/images/9781982182199.jpg";
   let book3 = "https://storage.googleapis.com/du-prd/books/images/9780425285978.jpg";

   return (
      <div className={classes.bookHeader}>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Fourth Wing by Rebecca Yarros" />
         <img src={book2} alt="Dead Fall by Brad Thor" />
         <img src={book3} alt="Light Bringer by Pierce Brown" />
      </div>      
   );
}