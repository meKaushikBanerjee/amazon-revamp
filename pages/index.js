import Head from "next/head";
import Header from '../Components/Header';
import Nav from '../Components/Nav';
import Banner from "../Components/Banner";
import ProductFeed from "../Components/ProductFeed";
import CategoryTab from "../Components/CategoryTab";

export default function Home({ products }) {
  
  return (
    <div>
      
      <Head>
        <title>Amazon Clone!</title>
      </Head>
      
      <Header />

      <main className="h-full w-auto pb-10">
        <Banner />
        <CategoryTab />
      </main>

      <main className="box-content w-auto md:mt-52 lg:mt-48">
        <ProductFeed products={products} />
      </main>

    </div>
    
  )
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then((res) => res.json()
  );
  
  return {
    props: {
      products,
    }
  }
}