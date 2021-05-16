import Header from "./Header";
import Blogsection from './Blogsection';
const Blog = () => {
    return ( 
        <div id="Blog">
        <Header otherheading={"our blog"}></Header>
        <Blogsection home={"home"} blog={"blog"}></Blogsection>
        </div>
     );
}
 
export default Blog;