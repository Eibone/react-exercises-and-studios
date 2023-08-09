import styles from "./Ingredients.module.css";

export default function RecipeIngredients() {
    let ingredients = ["9 lasagna noodles", "1lb ground beef",
     "48oz marinara sauce", "1 egg", "2lbs 3 cheese"];
     return(
        <div>
            <h3>Recipe Ingredients</h3>
                <ul className = {styles.ingredientList}>
                    <li>{ingredients[0]}</li>
                    <li>{ingredients[1]}</li>
                    <li>{ingredients[2]}</li>
                    <li>{ingredients[3]}</li>
                    <li>{ingredients[4]}</li>
                </ul>
        </div>
     );
}