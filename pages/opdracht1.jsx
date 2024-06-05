const AboutPage = () => {
  return (
    <>
      <h3> - Herken je jezelf in de uitslag? </h3>
      <br/>
      <p>Ik kan me we wel in de resultaten van de test vinden alleen bij de dimensie ‘Meegaandheid’ denk ik dat mijn score te hoog is. 
        Ik geloof dat het wel heel hoog is en dat ik niet zo erg hoog scoor. 
        Ik ben wel concurrerend en competitief, meer dan wat in de test naar voren komt.
         Voor de rest ben ik het wel eens met wat er in uitslag naar voren komt. </p>
      <br/>
      <h3> -	Kies twee dimensies waar je een voorbeeld bij bedenkt. </h3>
      <br/>
      <p>Extraversie: Tijdens een eigenschap waarvoor ik gemiddeld score. 
        Dit komt wel vaak voor als ik een project groep samenwerk dan ben. 
        In dit soort situaties neem ik regelmatig het initiatief en draag ik actief bij aan de groep.
         Maar kan serieus en formeel zijn waar nodig</p>
      <br/>
      <p>Openheid voor ervaringen: Als ik tegen een probleem aanloop dan heb ik altijd dezelfde aanpak voor hoe ik het aanpak. Wanneer ik programeer dan vind ik bekende structuren en praktisch zijn belangrijk dan het uitproberen van nieuwe technieken.</p>
      <h3>-	 Op welke dimensies zou je je willen verbeteren of nog beter willen benutten?</h3>
      <p>Ik zou me willen verbeteren op de dimensie "Openheid voor ervaringen" door meer open te staan voor nieuwe en 
        conceptuele probleemoplossingen. Dit zou kunnen bijdragen aan meer innovatieve benaderingen in mijn werk.</p>
      <p>Daarnaast wil ik mijn "Natuurlijke reacties" beter benutten door meer bewust te werken aan stressmanagement.
         Het leren omgaan met stressvolle situaties op een meer kalme en rationele manier kan mijn algehele welzijn en prestaties verbeteren.</p>

    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'opdracht1' },
  };
}

export default AboutPage;