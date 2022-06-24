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
name:PropTyes.string.isRequired,
url: PropTyes.string.isRequired
}
export default Card

