
const ImagePage3 = () => {
    return (
      <>
      <div><img src="/circleofinfluence1.png" alt="Italian Trulli" />
        </div>
      </>
    );
  };
  
  export async function getStaticProps() {
    return {
      props: { title: 'circleofinfluence' },
    };
  }
  
  export default ImagePage3;
  