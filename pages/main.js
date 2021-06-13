import Header from '../Components/Header';
import Nav from '../Components/Nav';
import Banner from "../Components/Banner";
import ProductFeed from "../Components/ProductFeed";
import CategoryTab from "../Components/CategoryTab";

function main({ products }) {
    return (
        <div>
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

export default main;