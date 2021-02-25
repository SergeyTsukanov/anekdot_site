import { Header } from "./Header/Header.jsx"
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import { MainPage } from "./MainPage/MainPage.jsx"
import { AboutPage } from "./About/AboutPage.jsx";
import {RegForm} from "./Forms/RegForm/RegForm.jsx"
import { NavBar } from "./NavBar/NavBar.jsx"
import { AddJokeForm } from "./Forms/AddJokeForm/AddJokeForm.jsx";
import styles from "./App.module.css"



function App() {
  
  return (
    <BrowserRouter>
      <div className="App">

        <Header />
        <div className={styles.container}>
          <div className={styles.content}>
            <NavBar />
            <Switch>

              <Route path="/" exact component={MainPage} />
              <Route path="/about" component={AboutPage} />
              <Route path ="/signup" component={RegForm} />
               <Route path ="/addjoke" component ={AddJokeForm} />
            </Switch>
            <div className ={styles.right_panel}></div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
