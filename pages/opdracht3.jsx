  import ProjectCard from '../components/ProjectCard';
  import { getProjects } from './api/projects';
  import styles from '../styles/ProjectsPage.module.css';
  
  const ProjectsPage = ({ projects }) => {
    return (
      <>
      <h3> Beschrijving van bedrijven die je leuk vindt (en waarom!) </h3>
      <br/>
      <p>The Doc: Dit bedrijf vond ik erg leuk omdat ze verschillende implementaties maken voor klanten.
         Het interessante aan hun werk is dat de projecten sterk variëren per klant,
         wat zorgt voor veel afwisseling en uitdaging. Hierdoor krijg je de kans om met diverse technologieën en oplossingen te werken,
         wat bijdraagt aan een  leerzame werkomgeving. </p>
      <br/>
      <h3> Beschrijving van bedrijven die je NIET leuk vindt (en waarom!) </h3>
      <br/>
      <p>PwC: Ik vond PwC minder aantrekkelijk omdat ik niet de drang heb om in de consultancy te gaan werken.
         Consultancy lijkt me minder passend omdat het vaak meer gericht is op advisering dan op de daadwerkelijke technische uitvoering en ontwikkeling,
          waar mijn interesse meer ligt.</p>
      <br/>
      <h3> Mogelijke werkzaamheden die je leuk vindt (en waarom!) </h3>
      <br/>
      <p>Programmeren: Ik vind programmeren leuk omdat het me in staat stelt om creatieve oplossingen te ontwikkelen
         voor complexe problemen. Het geeft een gevoel van voldoening om iets te bouwen en
          direct de resultaten van je werk te zien. 
          Bovendien biedt programmeren constante uitdagingen en mogelijkheden om nieuwe vaardigheden te leren.</p>
      <br/>
      <h3>Mogelijke werkzaamheden die je NIET leuk vindt (en waarom!) </h3>
      <br/>
      <p>Advies geven: Ik vind het minder aantrekkelijk om advieswerkzaamheden te verrichten.
         Hoewel het belangrijk is, geniet ik er minder van omdat het vaak meer gaat om strategische en theoretische aspecten in
         plaats van hands-on werken aan technische projecten. 
         Mijn voorkeur gaat uit naar het daadwerkelijk ontwikkelen en implementeren van oplossingen.</p>
      <br/>
      <h3> Beschrijving van de presentaties die je bijgewoond hebt </h3>
      <br/>
      <p>Oracle Presentatie 1: De eerste presentatie gaf een uitgebreide uitleg over wat Oracle doet. Dit was zeer informatief en hielp me een beter begrip te krijgen van hun activiteiten en producten. De spreker ging in op de verschillende diensten en oplossingen die Oracle biedt en hoe deze in diverse sectoren worden toegepast.</p>
      <p>Oracle Presentatie 2: In de tweede presentatie vertelden verschillende bedrijven hoe zij Oracle-producten gebruiken voor hun eigen bedrijfsvoering. Dit was bijzonder interessant omdat het praktische voorbeelden gaf van de toepassingen van Oracle in de echte wereld, en hoe deze producten bijdragen aan het succes van verschillende organisaties.</p>
      <br/>
      <h3>Je indruk van de dag & overzicht behaalde ‘netwerk’ resultaten</h3>
      <br/>
      <p>Mijn indruk van de dag was gemengd. Hoewel ik de presentaties informatief vond, had ik iets meer verwacht van de netwerkmogelijkheden. Er was beperkte tijd om met bedrijven te spreken, wat ik jammer vond. Ondanks dit heb ik toch waardevolle gesprekken kunnen voeren met vertegenwoordigers van twee bedrijven. Deze gesprekken hebben me inzicht gegeven in hun werkwijze en mogelijkheden voor toekomstige samenwerking. Over het algemeen was het een leerzame dag, maar er is ruimte voor verbetering in de organisatie van het netwerken.</p>
    </>
    );
  };
  
  export async function getStaticProps() {
    const projects = getProjects();
  
    return {
      props: { title: 'opdracht3' },
    };
  }
  
  export default ProjectsPage;