import {useEffect} from "react";
import anime from "animejs";

const Header = () => {
    //animation
    const animation = (target, target2) => {
        anime.timeline({loop:true})
        .add({
            targets:target,
            opacity: [0,1],
            delay: (el,i) => 70*(i+1)
        }).add({
            targets:target2,
            opacity:[0,1],
        })
    } 
    //component didmout
    useEffect(()=>{
        const title = document.querySelector('#headerTitle');
        const subTitle = document.querySelector('#headerSubTitle')
        title.innerHTML = title.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        animation(title.children, subTitle)
        console.log(title)
    },[]);
    return(
        <div className="bg-teal-600 w-full p-2 fixed z-10 drop-shadow-md">
            <div className="max-w-5xl mx-auto">
                <h1 id="headerTitle" className="text-3xl font-bold text-white">Rick & Morty</h1>
                <h2 id="headerSubTitle" className="text-lg italic">Character</h2>                
            </div>
        </div>
       
    );
}
export default Header;