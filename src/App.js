import logo from './assets/logo.png';
import bell from './assets/bell.png';
import msg from './assets/msg.png';
import user from './assets/users/user.png';
import {data_list} from "./data";
import search from './assets/search.png';


import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">

        <div className="left_header">

           <img src={logo} />
           <h3>Home</h3>
           <h3>Today</h3>
           <h3>Following</h3>
        </div>

        <div className="middle_header">
          <img src={search} />
           <h3>Search</h3>
        </div>

        <div className="right_header">
          <img src={bell} />
          <img src={msg} />
          <img src={user} />
        </div>


      </div>
      


      <div className="main_page">
         {
                    data_list.map((item,index=0) => (
                      
                          
                          <div className="post_box" key={item.key}>
                            <img src={item.img} />
                            <h2>{item.tagline}</h2>
                          </div>
                    ))
          }
      </div>
      
    </div>
  );
}

export default App;
