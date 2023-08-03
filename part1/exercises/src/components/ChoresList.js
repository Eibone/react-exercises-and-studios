import classes from './ChoresList.module.css';

export default function ChoresList () {
   return(
      <div>
         <h3 className={classes.choresHeading}>My Chores List</h3>
         <ul className= {classes.choresText}>
            <li>Clean the house</li>
            <li>Get groceries</li>
            <li>Feed the animals</li>
         </ul>
      </div>
   );
}