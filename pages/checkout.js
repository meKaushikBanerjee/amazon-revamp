import Header from "../Components/Header";
import Image from "next/image";

function Checkout() {
    return (
        <div>
            <Header />
            <main className="flex flex-col max-w-screen-2xl mx-auto">
                
                <div className="flex flex-grow shadow-sm">
                    <Image 
                        src="https://assets1.csnews.com/files/styles/hero/s3/2018-07/Amazon%20Prime%20Day%202018_hero_072318.jpg?itok=Iw0QqmJQ"
                        width={1420}
                        height={350}
                        objectFit="cover"
                    />
                </div>

                <div className="flex flex-grow m-5 p-5 font-semibold bg-white shadow-lg sm:rounded-3xl sm:p-20 bg-clip-padding bg-opacity-30 border border-gray-300">
                    <h1>Your Shopping Basket</h1>
                </div>
            </main>
        </div>
    )
}

export default Checkout