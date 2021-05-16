import Header from "./Header";
import Aboutsection from "./Aboutsection";
import Tripsection from "./Tripsection";
import Team from "./Team";
import Blogsection from "./Blogsection";
import Customer from "./Customer";
import Tripsection2 from "./Tripsection2";
const Home = () => {
    return ( 
        <div className="Home">
            <Header home={"ho"} heading={"he"} paragraph={"par"} video={"vi"}></Header>
            <Aboutsection></Aboutsection>
            <Tripsection></Tripsection>
            <Team></Team>
            <Blogsection home={"home"}></Blogsection>
            <Customer></Customer>
            <Tripsection2></Tripsection2>
            
        </div>
     );
}
 
export default Home;
