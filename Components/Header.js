import Image from "next/image";
import { 
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from 'next-auth/client';
import { useRouter } from "next/router";

function Header({products}) {
    const[session] = useSession();
    const router = useRouter();

    return (
        <header>
            {/*   Top Nav   */}
            <div className="flex items-center bg-green-200 p-1 flex-grow py-2">
                <div className="link mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <Image  
                        onClick={() => router.push("/")}  
                        src="/images/amazon.png"
                        width={150}
                        height={40}
                        objectFit="contain"
                        className="cursor-pointer"   
                    />
                </div>
                {/*  Search Element  */}
                <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer  bg-yellow-400 hover:bg-yellow-500">
                    <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md fpcus:outline-none" type="text" name="" id=""/>
                    <SearchIcon className="h-12 p-4" />
                </div>
                {/*   Right  */}
                <div className="text-black flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                    <div onClick={!session ? signIn : signOut} className="link">
                        <p className="hover:underline">
                            {session? `Hello, ${session.user.name}`: 'Sign In'}
                        </p>
                        <p className="font-extrabold md:text-sm">Account & List</p>
                    </div>

                    <div className="link">
                        <p>Returns</p>
                        <p className="font-extrabold md:text-sm">&orders</p>
                    </div>

                    <div onClick={() => router.push("/checkout")} className="relative link flex items-center">
                        
                        <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">0</span>

                        <ShoppingCartIcon className="h-10" />
                        <p className="hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
                    </div>
                </div>
            </div>

            {/*    Bottom Nav    */}
            <div className="flex flex-grow justify-between items-center space-x-3 p-2 pl-6 bg-green-200 text-black text-sm font-semibold">
                <p className="link flex-grow flex items-center text-black">
                    <MenuIcon className="h-6 mr-1" />
                    All
                </p>
                <p className="link flex-grow">Prime Video</p>
                <p className="link flex-grow">Amazon Business</p>
                <p className="link flex-grow">Today's Deals</p>
                <p className="link flex-grow hidden lg:inline-flex">Electronics</p>
                <p className="link flex-grow hidden lg:inline-flex">Food & Grocery</p>
                <p className="link flex-grow hidden lg:inline-flex">Prime</p>
                <p className="link flex-grow hidden lg:inline-flex">Buy Again</p>
                <p className="link flex-grow hidden lg:inline-flex">Shopper Toolkit</p>
                <p className="link flex-grow hidden lg:inline-flex">Health & Personal Care</p>
            </div>
        </header>
    )
}

export default Header