export default function HobbyLinks() {
    let hobbyLinks = ["https://pcbuilder.net/", "https://diablo4.blizzard.com/en-us/"];

    return(
        <div>
            <h3>My Hobbies</h3>
            <a href = {hobbyLinks[0]}>PC Building <br/></a>
            <a href={hobbyLinks[1]}> Video games</a>
        </div>
    );
}