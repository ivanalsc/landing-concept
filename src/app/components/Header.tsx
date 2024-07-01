import styles from './Header.module.css';


export default function Header() {
  return (
   <header className="w-4/5 flex justify-between m-auto py-4">
    <p className='text-3xl'>
      ROCK 'N BURGUER
    </p>
    <div>
      <button className={styles.headerButton}>ORDER ONLINE</button>
    </div>
   </header>
  )
}

