import { Header } from "./components/Header/Header.jsx"
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import { MainPage } from "./components/MainPage/MainPage.jsx"
import { AboutPage } from "./components/About/AboutPage.jsx";
import {RegForm} from "./Forms/RegForm.jsx"
import { NavBar } from "./components/NavBar/NavBar.jsx"
import { AddJokeForm } from "./Forms/AddJokeForm.jsx";
import {LogInForm} from "./Forms/LogInForm.jsx"
import styles from "./App.module.css"
import { createContext  } from "react";
import {MyContext} from "./context"


function App() {
  
  return (
    <MyContext.Provider value = {["", "Армейский", "Студенческий"]}>
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
              < Route path ="/login" component ={LogInForm}/>
               <Route path ="/addjoke" component ={AddJokeForm} />
            </Switch>
            <div className ={styles.right_panel}></div>
          </div>
        </div>
      </div>
    </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
