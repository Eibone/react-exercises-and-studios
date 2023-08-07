import styles from "./Description.module.css";
import React from "react";

class RecipeDescription extends React.Component {
    render() {
        return(
            <div>
                <div>
                    <h1>The Best Lasagna Recipe</h1>
                    <p>This classic Lasagna Recipe is cheesy, saucy and full of flavor! 
                        Make this easy lasagna recipe for a family dinner or to feed a crowd.</p>
                </div>
                <RecipeAuthor />
            </div>
        );
    }
        
}
function RecipeAuthor() {
    let authorLink = "https://kristineskitchenblog.com/lasagna/";
    let authorPhoto = "https://i0.wp.com/kristineskitchenblog.com/wp-content/uploads/2023/02/About-Kristine-2-2.jpg?resize=1024%2C1536&ssl=1";
    let authorName = "Kristine Rosenblatt";
    return (
        <div className = {styles.recipeAuthorBlock}>
        <img src={authorPhoto} alt = "Photo of Kristine Rosenblatt" className={styles.imageUpdates} />
        <div>
           <h3>{authorName}</h3>
           <a href={authorLink}>Kristine's Kitchen</a> 
        </div>
     </div>
    )
}

export default RecipeDescription;
