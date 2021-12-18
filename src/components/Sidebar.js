import styles from '../../styles/Home.module.css'


function Sidebar(){

   return (
    <aside className = {styles.aside}>
       <div className = {styles.asideDiv}>
       <div className = {styles.filters}>Filters</div>

       <div className={styles.dropdowns}>
       <div className ={styles.dropdown}>Products</div>
       <div className ={styles.dropdown}>State</div>
       <div className ={styles.dropdown}>City</div>
       </div>
       </div>
       
       
       </aside>

   ) 

}

export default Sidebar