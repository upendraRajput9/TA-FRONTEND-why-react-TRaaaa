import PropTyes from "prop-types";



function Card(props){
    return (
        <div className="newsArticle">
                <img src={props.urlToImage} alt={props.title}/>
                <article>
                    <h2>{props.title}</h2>
                    <site>Author: <b>{props.author}</b></site>
                    <h3>{props.description}</h3>
                    <p>{props.content}</p>
                    <span>PublishedAt: {props.publishedAt.slice(0,10)}</span>
                    <a href={props.url}>Read more</a>
                </article>
             
        </div>
    )
}

Card.PropTyes  ={
author:PropTyes.string,
content: PropTyes.string,
description:PropTyes.string,
publishedAt:PropTyes.string,
title:PropTyes.string,
url:PropTyes.string,
urlToImage:PropTyes.string,

}
export default Card

