import AddContact from './components/AddContact';
import ContactsLists from './components/ContactsLists';
import React from 'react';

class App extends React.Component{
 
  render(){
    return (
      <div>
        <div className="row title">
          <h1 style={{marginLeft: "520px"}}>Contact Manager</h1>
        </div>
          
        <div className = "row">
          <div className = "col-md-5 userinput">
            <AddContact/>
          </div>
          
          <div className = "col-md-7 userlist">
            <ContactsLists/>  
          </div>
          
        </div>
      </div>
    );

}
}
export default App;
