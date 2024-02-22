
import Navigation from "../components/Navigation";
import starwars from '../assets/starwars.jpg'

export default function HomePage() {

    return(
        <>
        <Navigation/>
        <img className="poster" alt="starwars_poster" src={starwars}/>
        </>

    
    )
}