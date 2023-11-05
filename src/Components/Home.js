import FeaturedItems from './FeaturedItems'

const Home = () => {
    return ( 
        <div className="home">            
            <header className="header">
                <div className="container">
                    <div>
                        <h1>Fresh and Nutritious</h1>
                        <p>Many things in life are complicated. Nutrition shouldn't have to be one of those things. Brindle Smoothies have simple ingredients that leave you feeling refreshed! Give one a try today!</p>
                    </div>      
                    <img src="smoothie.svg" alt="" />      
                </div>
            </header>
            <FeaturedItems />
        </div>
     );
}
 
export default Home;