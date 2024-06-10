
const ImagePage = () => {
  return (
    <>
    <div><img src="/foto1.png" alt="Italian Trulli" />
      </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'bigfive' },
  };
}

export default ImagePage;
