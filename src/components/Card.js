import anime from 'animejs';

const Card = ({img=undefined, title="Sample Title", description="sample description", href="https://www.google.com/"}) => {
    //custom style
    const cardContainer = {
        backgroundImage: 'url(' + img + ')',
        backgroundSize: 'cover',
        backgroundPosition: "center",
        overflowY : 'hidden'
    }
    const cardCaption = {
        marginTop: "18rem",
        height: "4rem",
        overflow: "hidden",
        backgroundColor: "rgba(210,210,210,0.5)"
    }


    //animation
    const animTemplate = {
        duration: 500,
        delay: 0,
        marginTop: ["18rem","16rem"],
        easing: 'linear'
    }
    const inAnimation = (target) => ( anime(
        {...animTemplate,targets:target}
    ));

    const outAnimation = (target) => ( anime(
        {...animTemplate,targets:target, marginTop:"18rem"}
    ));

    //function handlre
    function mouseHoverHandler(e){
        const target = e.target.firstChild;
        if(target.id === "cardCaption"){
            e.type==="mouseover"?inAnimation(target):outAnimation(target)
        }
    }

    function onClickHandler(){
        console.log(href)
        window.location.href = href;
    }

    return(
        <div style={cardContainer} className="w-72 h-80 rounded-md drop-shadow-md cursor-pointer" onMouseOver={mouseHoverHandler} onMouseOut={mouseHoverHandler} onClick={onClickHandler}>
            <div id="cardCaption" style={cardCaption} className="cardCaption w-72 flex flex-col items-center">
                <h2 className="w-72 text-lg text-blue-900 font-bold text-center mt-1">{title}</h2>
                <p className="w-72 text-sm text-center">{description}</p>
            </div>
        </div>
    );
}

export default Card;