import Header from "./Header";
import Aboutsection from './Aboutsection';
import Missionsection from './Missionsection';
import Team from './Team';
import Tripsection2 from './Tripsection2';

const About = () => {
    return ( 
        <div className="About">
            <Header otherheading={"about us"}></Header>
            <Aboutsection></Aboutsection>
            <Missionsection></Missionsection>
            <Team></Team>
            <Tripsection2></Tripsection2>
        </div>
     );
}
 
export default About;