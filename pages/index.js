import Link from 'next/link';
import styles from '../styles/Home.module.scss';


const Homepage = () => {
  return (
    <div className='content'>
      <h1 className={styles.title}>Welcome to NextJs App</h1>
      <p className={styles.text}>This is the Homepage Lorem ipsum dolor sit amet consectetur, 
        adipisicing elit. Praesentium laboriosam delectus eaque nobis 
        aliquid necessitatibus voluptatum facere voluptates? Hic corporis 
        reprehenderit consectetur laudantium, quod blanditiis ut distinctio 
        alias amet dolore.
        This is the Homepage Lorem ipsum dolor sit amet consectetur, 
        adipisicing elit. Praesentium laboriosam delectus eaque nobis 
        aliquid necessitatibus voluptatum facere voluptates? Hic corporis 
        reprehenderit consectetur laudantium, quod blanditiis ut distinctio 
        alias amet dolore.
      </p>

        

      <Link href="/admin"><a className={styles.btn}>See Admin List</a></Link>
    </div>
  );
}
 
export default Homepage;