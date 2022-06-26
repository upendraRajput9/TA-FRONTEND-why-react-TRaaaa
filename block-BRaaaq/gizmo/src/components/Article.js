import data from "./data";
import Card from "./Card";

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



    export default Article
  