const LearningPage = () => {
    return (
      <>
        <h3> - Welke kennis heb ik opgedaan </h3>
        <br/>
        <p>Gedurende mijn opleiding heb ik de essentiële fundamenten geleerd die nodig zijn voor een carrière als software developer. Ik heb gewerkt met een breed scala aan programmeertalen en frameworks, waaronder:</p>
        <br/>
        <p>- C# en .NET: Ik heb diepgaande kennis opgedaan in C# en het .NET framework, wat cruciaal is voor het ontwikkelen van robuuste, schaalbare applicaties.</p>
        <br/>
        <p>- Java: Ik heb uitgebreide ervaring opgedaan met Java, wat mij een sterke basis heeft gegeven in object-georiënteerd programmeren.</p>
        <br/>
        <p>- JavaScript: Deze taal is onmisbaar voor webontwikkeling, en ik heb geleerd hoe ik interactieve en dynamische webpagina's kan maken.</p>
        <br/>
        <p>- HTML en CSS: Naast JavaScript heb ik ook geleerd hoe ik webpagina's kan structureren en stylen.</p>
        <br/>
        <p>- React: Dit populaire front-end framework heeft me geholpen om moderne, responsieve gebruikersinterfaces te bouwen.</p>
        <br/>
        <p>- Blazor: Met Blazor heb ik geleerd om single-page applicaties te ontwikkelen met behulp van .NET en C#.</p>
        <br/>
        <p>Naast deze technische vaardigheden heb ik ook fundamentele kennis opgedaan in belangrijke concepten zoals design patterns en testing:</p>
        <br/>
        <p>- Design Patterns: Ik heb geleerd hoe ik veelvoorkomende problemen in softwareontwerp kan aanpakken door gebruik te maken van beproefde oplossingen, wat de onderhoudbaarheid en uitbreidbaarheid van code verbetert.</p>
        <br/>
        <p>- Testing: Ik heb inzicht gekregen in verschillende testmethodologieën en tools om de kwaliteit en betrouwbaarheid van software te waarborgen.</p>
        <br/>
        <p>Ook heb ik geleerd over andere cruciale aspecten van softwareontwikkeling, zoals:</p>
        <br/>
        <p>- Security: Ik heb kennis opgedaan over beveiligingsprincipes en best practices om veilige software te ontwikkelen en te beschermen tegen bedreigingen.
    </p>
        <br/>
        <p>Een ander belangrijk aspect van mijn opleiding was het werken in teamverband met behulp van Scrum:</p>
        <br/> 
        <p>tijdens mijn opleiding heb ik een uitgebreide set vaardigheden en kennis opgedaan die essentieel zijn voor een succesvolle carrière in softwareontwikkeling. </p>
        <br/>
      </>
    );
  };
  
  export async function getStaticProps() {
    return {
      props: { title: 'Wat heb ik geleerd' },
    };
  }
  
  export default LearningPage;