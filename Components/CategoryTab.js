function CategoryTab() {
    function productdisplay(){
        if(document.getElementById("")){

        }
    }
    return (
        <div className="flex flex-col flex-grow m-5 space-y-5 md:space-x-8 md:flex-row">              
            <button className="flex flex-grow justify-center items-center mt-auto button bg-yellow-500 text-black font-semibold hover:bg-yellow-600 h-12 rounded-2xl" onClick={productdisplay}>All</button>  
            <button className="flex flex-grow justify-center items-center mt-auto button bg-yellow-500 text-black font-semibold hover:bg-yellow-600 h-12 rounded-2xl" onClick={productdisplay}>Men's Clothing</button>
            <button className="flex flex-grow justify-center items-center mt-auto button bg-yellow-500 text-black font-semibold hover:bg-yellow-600 h-12 rounded-2xl" onClick={productdisplay}>Women's Clothing</button>
            <button className="flex flex-grow justify-center items-center mt-auto button bg-yellow-500 text-black font-semibold hover:bg-yellow-600 h-12 rounded-2xl" onClick={productdisplay}>Electronics</button>    
            <button className="flex flex-grow justify-center items-center mt-auto button bg-yellow-500 text-black font-semibold hover:bg-yellow-600 h-12 rounded-2xl" onClick={productdisplay}>Jewellery</button>
        </div>
    );
}

export default CategoryTab;