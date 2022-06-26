import Blog from "./blog"
import Contact from "./contact"
import Footer from "./footer"
import Header from "./header"
import Hero from "./hero"
import About from "./about"
import Work from "./work"

function App(){
    return(
<>
<Header/>
<main>
    <Hero/>
    <About/>
    <Blog/>
    <Work/>
   <Contact/>
</main>
<Footer/>
</>
    )
}

export default App