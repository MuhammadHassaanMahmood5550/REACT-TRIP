import Header from "./Header";
import Customer from "./Customer";
import Contactsection from "./Contactsection";
const Contact = () => {
    return ( 
        <div id="Contact">
            <Header otherheading={"contact us"}></Header>
            <Contactsection></Contactsection>
            <Customer></Customer>
        </div>
     );
}
 
export default Contact;