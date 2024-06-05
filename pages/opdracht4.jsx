  import ProjectCard from '../components/ProjectCard';
  import { getProjects } from './api/projects';
  import styles from '../styles/ProjectsPage.module.css';
  
  const opdracht4Page = ({ projects }) => {
    return (
      <>
      <h3> Toelichting op de Kwaliteiten en Vervormingen van Groepsgenoten </h3>
      <br/>
      <h3>Kwaliteit: Organisator</h3>
      <br/>
      <h3>•	Waarom vind jij deze kwaliteit van toepassing? </h3>
      <p>hij is altijd goed georganiseerd en weet precies wat er moet gebeuren en wanneer. 
         Hij houdt de taken en deadlines bij, wat zorgt voor een gestructureerde aanpak binnen de groep.</p>
      <br/>
      <h3>•	Wat is het effect ervan op jou?</h3>
      <p> Het effect van deze kwaliteit op mij is zeer positief. 
          Het zorgt ervoor dat ik me geen zorgen hoef te maken over de planning en 
          dat ik me kan concentreren op mijn eigen taken. 
          Dit geeft me rust en vertrouwen in de voortgang van het project.</p> 
      <br/>
   
      <h3>Vervorming: Afwachtend</h3>
      <br/>
      <h3>•	Waarom vind jij deze Vervorming van toepassing? </h3>
      <p>Hoewel hij goed georganiseerd is,
         kan hij soms afwachtend zijn als het gaat om het nemen van beslissingen.
         Dit kan de voortgang van het project vertragen.</p> 
      <br/>
      <h3>•	Wat is het effect ervan op jou?</h3>
      <p>Dit gedrag kan frustrerend zijn,
         vooral wanneer er snel actie nodig is. 
         Het zorgt ervoor dat er soms tijd verloren gaat en
         ik me afvraag wanneer we verder kunnen gaan met de volgende stappen.</p> 
      <br/>
  
      <h3>Kwaliteit: Doorzetter</h3>
      <br/>
      <h3>•	Waarom vind jij deze kwaliteit van toepassing? </h3>
      <p>geeft nooit op,
         zelfs niet bij moeilijke taken of als we tegen obstakels aanlopen.
         Hij blijft gemotiveerd en werkt hard om de doelen te bereiken.</p>
      <br/>
      <h3>•	Wat is het effect ervan op jou?</h3>
      <p> Het doorzettingsvermogen inspireert me 
          en moedigt me aan om ook door te zetten bij uitdagingen.
          Het geeft me het gevoel dat we als team altijd een manier zullen vinden om succesvol te zijn.</p> 
      <br/>
   
      <h3>Vervorming: Stil</h3>
      <br/>
      <h3>•	Waarom vind jij deze Vervorming van toepassing? </h3>
      <p> Vaak stil tijdens vergaderingen en discussies, 
         wat kan betekenen dat waardevolle ideeën en input niet worden gedeeld.
         Dit kan de samenwerking en de creativiteit van de groep beperken.</p>
      <br/>
      <h3>•	Wat is het effect ervan op jou?</h3>
      <p>Het stil zijn kan ervoor zorgen dat ik niet altijd 
         weet wat hij denkt of voelt over bepaalde onderwerpen.
         Dit maakt het moeilijker om goed samen te werken en volledig gebruik te maken
         van ieders kennis en vaardigheden.</p> 
      <br/>
   </>
    );
  };
  
  export async function getStaticProps() {
    const projects = getProjects();
  
    return {
      props: { title: 'opdracht4' },
    };
  }
  
  export default opdracht4Page;
  