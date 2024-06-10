
const ImagePage2 = () => {
    return (
      <>
      <div><img src="/foto2.png" alt="Italian Trulli" />
        </div>
      </>
    );
  };
  
  export async function getStaticProps() {
    return {
      props: { title: 'caluwe' },
    };
  }
  
  export default ImagePage2;
  