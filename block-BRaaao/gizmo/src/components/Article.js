import data from "./data";

function Article(){
return(
    <section>
        <h2 className="news">News</h2>
        <div className="articleSection">
        {data.map((article)=>
            <Card key={article.title} {...article}/>
        )}
        </div>
    </section>
)
}

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

    export default Article
  