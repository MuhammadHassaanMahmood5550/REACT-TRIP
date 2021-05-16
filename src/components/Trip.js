import Header from "./Header";
import Tripsection from './Tripsection';
import Aboutsection from './Aboutsection';
const Trips = () => {
    return ( 
        <div className="Trip">
            <Header otherheading={"trips list"}></Header>
            <Tripsection></Tripsection>
            <Aboutsection></Aboutsection>
        </div>
      );
}
 
export default Trips;