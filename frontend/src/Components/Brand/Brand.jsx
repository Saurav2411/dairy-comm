
const Brand = () => {

    const brands = [
        {
            id: 1,
            image: "/src/assets/brands/brand_1.jpeg"
        },
        {
            id: 2,
            image: "/src/assets/brands/brand_2.jpeg"
        },
        {
            id: 3,
            image: "/src/assets/brands/brand_3.png"
        },
        {
            id: 4,
            image: "/src/assets/brands/brand_4.png"
        },
        {
            id: 5,
            image: "/src/assets/brands/brand_5.jpeg"
        },
        {
            id: 6,
            image: "/src/assets/brands/brand_6.jpeg"
        }, 
        {
            id: 7,
            image: "/src/assets/brands/brand_7.jpeg"
        },
 
    ]

    return (
        <div className="lg:container mx-auto">
            <div className="grid grid-cols-7 items-center justify-center gap-5">
                {
                    brands?.map((brand) => (
                        <div key={brand?.id} className="brand_item">
                            <img className="w-auto h-auto" src={brand?.image} alt="brand" />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Brand;