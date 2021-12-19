import styles from '../../styles/Home.module.css'


function ProductCard({data}){
console.log(data.data[1].address.state)
   return (
<div className={styles.cardContainer}>
       <div  className={styles.topDiv}>

          <img className = {styles.img} src = {data.data[1].image}/>
          <div className={styles.topInfo}>
             <div className={styles.productName}>{data.data[1].product_name}</div>
             <div className={styles.brandName}>{data.data[1].brand_name}</div>
             <div className={styles.productPrice}>{data.data[1].price}</div>
          </div>

         </div> 
         <div className ={styles.bottomDiv}>
            <div className={styles.bottomInfo}>
            <span className = {styles.location}>{data.data[1].address.state}</span>
            <span className = {styles.date}>{data.data[1].date}</span>
            </div>
            
            <span className = {styles.description}>{data.data[1].discription}</span>
         </div>
        
        
        
    </div>

   ) 

}

export default ProductCard