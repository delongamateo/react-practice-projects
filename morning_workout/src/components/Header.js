import UserInfo from "./UserInfo";
import Navigation from "./Navigation";
import "../App.css";

function Header () {
    return (
        <header>
            <img src="https://classes.codingbootcamp.cz/assets/classes/workouts/aperture.png" alt="Aperture science" className="logo" />

            <UserInfo />

            <Navigation />
        </header>
    )
}

export default Header;