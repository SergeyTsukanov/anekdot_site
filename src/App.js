import {Header} from "./Header/Header.jsx"
<<<<<<< HEAD


=======
import {Post} from "./elements/Post"
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import {MainPage} from "./MainPage/MainPage.jsx"
import { AboutPage} from "./About/AboutPage.jsx";
>>>>>>> origin/2
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Switch>
        <Route path ="/" exact component={MainPage}/>
        <Route path ="/about" component ={AboutPage}/>
       
       </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
