import styles from '../../styles/Home.module.css';
import ProductCard from '../components/ProductCard';


function Carousel(data){

   return (
    <div>
       <h4 className={styles.h4}>Product Name</h4>
       <div className={styles.carouselDiv}>
        <ProductCard data={data}/>
       </div>

         </div>

   ) 

}

export default Carousel