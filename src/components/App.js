import React from 'react';
import contacts from "../contacts";
import Card from './Card';


function App() {
    console.log(contacts)
   return (
    <div>
        <h1 className="heading">My Contacts</h1>
        {contacts.map((element) => (
            <Card key={element.id} nameOf={element.name} imageOf={element.imgURL} phoneOf={element.phone} emailOf={element.email} />
            // <div>
            // <p>{element.name}</p> 
            // <p>{element.phone}</p>
            // <p>{element.email}</p>
            // <img src={element.imgURL}/>

            // </div>

        ))}
    </div>


) 
   
    

}
export default App;