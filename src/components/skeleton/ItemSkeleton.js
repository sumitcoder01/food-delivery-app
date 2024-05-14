import CardSkeleton from "./CardSkeleton";

export default function ItemSkeleton() {
    const foodCategories = ['Biryani/Rice', 'Starter', 'Pizza']; 
    const numItemsPerCategory = 8; 

    return (
        <div className='my-2'>
            {foodCategories.map((category, index) => (
                <div key={index} className="skeleton-category mb-4">
                    <div className="h3 mb-4 ms-5 w-25 mx-auto" style={{ backgroundColor: "#353935", height: "18px" }}></div>
                    <hr />
                    <div className="row d-flex flex-wrap">
                        {[...Array(numItemsPerCategory)].map((_, itemIndex) => (
                            <div className="col-12 col-md-6 col-lg-4" key={itemIndex}>
                                <CardSkeleton />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
