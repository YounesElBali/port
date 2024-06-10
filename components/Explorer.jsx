import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import ChevronRight from '../components/icons/ChevronRight';
import styles from '../styles/Explorer.module.css';

const explorerItems = [
  {
    name: 'home.jsx',
    path: '/',
    icon: 'react_icon.svg',
  },
  {
    name: 'opdracht1.html',
    path: '/opdracht1',
    icon: 'html_icon.svg',
  },
  {
    name: 'opdracht2.css',
    path: '/opdracht2',
    icon: 'css_icon.svg',
  },
  {
    name: 'opdracht3.js',
    path: '/opdracht3',
    icon: 'js_icon.svg',
  },
  {
    name: 'opdracht4.json',
    path: '/opdracht3',
    icon: 'json_icon.svg',
  },
  {
    name: 'geleerd.js',
    path: '/geleerd',
    icon: 'js_icon.svg',
  },
  {
    name: 'BigFive.js',
    path: '/bigfive',
    icon: 'placeholder.png',
  },
  {
    name: 'Caluwe.js',
    path: '/caluwe',
    icon: 'placeholder.png',
  }
  // ,
  // {
  //   name: 'circleofinfluence.js',
  //   path: '/circleofinfluence',
  //   icon: 'placeholder.png',
  // },
];

const Explorer = () => {
  const [portfolioOpen, setPortfolioOpen] = useState(true);

  return (
    <div className={styles.explorer}>
      <p className={styles.title}>Explorer</p>
      <div>
        <input
          type="checkbox"
          className={styles.checkbox}
          id="portfolio-checkbox"
          checked={portfolioOpen}
          onChange={() => setPortfolioOpen(!portfolioOpen)}
        />
        <label htmlFor="portfolio-checkbox" className={styles.heading}>
          <ChevronRight
            className={styles.chevron}
            style={portfolioOpen ? { transform: 'rotate(90deg)' } : {}}
          />
          Portfolio
        </label>
        <div
          className={styles.files}
          style={portfolioOpen ? { display: 'block' } : { display: 'none' }}
        >
          {explorerItems.map((item) => (
            <Link href={item.path} key={item.name}>
              <div className={styles.file}>
                <Image
                  src={`/${item.icon}`}
                  alt={item.name}
                  height={18}
                  width={18}
                />{' '}
                <p>{item.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explorer;
