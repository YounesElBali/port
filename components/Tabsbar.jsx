import Tab from './Tab';
import styles from '../styles/Tabsbar.module.css';

const Tabsbar = () => {
  return (
    <div className={styles.tabs}>
      <Tab icon="/react_icon.svg" filename="home.jsx" path="/" />
      <Tab icon="/html_icon.svg" filename="opdracht1.html" path="/opdracht1" />
      <Tab icon="/css_icon.svg" filename="opdracht2.css" path="/opdracht2" />
      <Tab icon="/js_icon.svg" filename="opdracht3.js" path="/opdracht3" />
      <Tab icon="/json_icon.svg" filename="opdracht4.json" path="/opdracht4" />
      <Tab icon="/js_icon.svg" filename="geleerd.js" path="/geleerd" />
      <Tab icon="/placeholder.png" filename="bigfive.js" path="/bigfive" />
      <Tab icon="/placeholder.png" filename="caluwe.js" path="/caluwe" />
   
    </div>
  );
};

export default Tabsbar;
