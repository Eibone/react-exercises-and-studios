import styles from './Description.module.css';

export default function RecipePhoto() {
    return(
        <div>
            <img src="https://i0.wp.com/kristineskitchenblog.com/wp-content/uploads/2022/10/lasagna-recipe-16.jpg?resize=1024%2C1536&ssl=1"
                alt="Photo of Lasagna" className = {styles.imageUpdates} />
        </div>
    )
}