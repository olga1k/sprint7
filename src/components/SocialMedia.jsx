import fb from "../assets/fb.svg";
import ig from "../assets/ig.svg";
import tw from "../assets/tw.svg";
import yt from "../assets/yt.svg";
 
export default function SocialMedia() {

    return (
        <div className="social-media">
            <img src={fb} alt="facebook-logo"/>
            <img src={ig} alt="instagram-logo"/>
            <img src={tw} alt="twitter-logo"/>
            <img src={yt} alt="youtube-logo"/>

            
        </div>
    )
}