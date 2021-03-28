import ClipLoader from "react-spinners/ClipLoader";
import styles from "./Preloader.module.css"
export const Loader = (props) =>{
    return <div className ={styles.Loader}><ClipLoader {...props} /></div>
}
