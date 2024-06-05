import Link from 'next/link';
import Illustration from '../components/Illustration';
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>I BUILD</h1>
          <h1>WEBSITES</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Younes el Bali</h1>
            <h6 className={styles.bio}>Full Stack Web Developer</h6>
           <p>Ik ben een gedreven software developer met de kennis om innovatieve oplossingen te vinden voor complexe problemen. 
              Met mijn ervaring met Agile en mijn vermogen om effectief samen te werken, stelt me in staat om niet alleen hoogwaardige oplossing op te leveren,
              maar ook continu te verbeteren en te innoveren.</p>
          </div>
          <Illustration className={styles.illustration} />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
