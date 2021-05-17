import { useState } from "react";
import styles from "./AboutPage.module.css";

export const AboutPage = (props) => {
  const [collapse, setCollapse] = useState(true);
  return (
    <div className={styles.about}>
      <p className = {styles.about_text}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
        excepturi, eligendi aut, error aliquam obcaecati ea tempora magnam qui,
        explicabo provident nihil quos. Labore, velit minus? Quo id culpa nobis!
        <span  className ={collapse?null:styles.hidden_elem  }>...</span>
         <span className= {collapse?styles.hidden_elem:null}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nemo
        nostrum repellat rem esse libero! Maxime, vero eos esse nihil, aut nemo
        alias dolor dolores architecto voluptatem similique, veritatis natus.
       </span>
      </p>
      <button className={styles.collapse_button} onClick={() =>{setCollapse(!collapse)}}>{collapse? "Show more":"hide"}</button>
    </div>
  );
};
