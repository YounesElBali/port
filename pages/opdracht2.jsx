  
  import ProjectCard from '../components/ProjectCard';
  import { getProjects } from './api/projects';
  import styles from '../styles/ProjectsPage.module.css';
  
  const opdracht2Page = ({ projects }) => {
    return (
      <>
      <h3> Eerste Werkdag bij een Nieuwe Baan: Softwareontwikkelaar</h3>
      <br/>
      <p>Mijn eerste werkdag bij mijn nieuwe baan als softwareontwikkelaar begint vol verwachting.
         Ik kom aan bij een bedrijf dat zich richt op diverse technologische implementaties 
         voor verschillende klanten.</p>
      <br/>
      <p>Na het aanmelden bij receptie, word ik begeleid naar mijn nieuwe werkplek.
         Mijn bureau staat in een open kantoorruimte, omgeven door collega’s die al druk aan het werk zijn
         of nog binnen komen. De sfeer is informeel maar professioneel, wat me meteen op mijn gemak stelt.</p>
      <br/>
      <p>De ochtend begint met een kennismakingsrondje. 
         Ik ontmoet mijn directe collega's en mijn leidinggevende.
         Het blijkt dat mijn eerste project te maken heeft met de ontwikkeling van een maatwerkapplicatie. 
         Dit sluit perfect aan bij mijn interesse in het creëren van praktische oplossingen 
         die een directe impact hebben.</p>
      <br/>
      <p>Na de introductie krijg ik een rondleiding door het kantoor. 
         Ik zie de verschillende afdelingen. Het valt me op hoe elke afdeling nauw samenwerkt
         om de beste resultaten voor de klanten te bereiken.</p>
      <br/>
      <p>Vervolgens begin ik met het instellen van mijn werkplek. 
         Mijn laptop wordt geconfigureerd met de benodigde software en ik krijg toegang tot de interne systemen. 
         Er is een buddy-systeem in place, 
         en mijn toegewezen buddy helpt me door de eerste technische hindernissen heen. 
         Hij laat me zien hoe de codebase is gestructureerd en introduceert me aan de tools die we dagelijks gebruiken.</p>
      <br/>
      <p>Tijdens de lunch leer ik meer collega's kennen in de gezellige kantine. 
         We praten over lopende projecten en ik krijg een gevoel van de bedrijfscultuur.
         Iedereen is behulpzaam en open, wat me een goed gevoel geeft over mijn keuze om hier te werken.</p>
      <br/>
      <p>In de middag begin ik aan mijn eerste taak: 
         het analyseren van bestaande code. 
         De tijd vliegt voorbij terwijl ik me verdiep in het project. Wat mij brengt tot de einde van de dag.</p>
      <br/>
   </>
    );
  };
  
  export async function getStaticProps() {
    const projects = getProjects();
  
    return {
      props: { title: 'opdracht2' },
    };
  }
  
  export default opdracht2Page;