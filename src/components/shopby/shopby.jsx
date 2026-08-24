import './shopby.css';


import cat1 from '../../assets/image/cat-01.jpg';
import cat2 from '../../assets/image/cat-02.jpg';
import cat3 from '../../assets/image/cat-03.jpg';
import cat4 from '../../assets/image/cat-04.jpg';
import cat5 from '../../assets/image/cat-05.jpg';
import cat6 from '../../assets/image/cat-06.jpg';

const categoriesData = [
    { name: 'Fruit', image: cat1 },
    { name: 'Vegetables', image: cat2 },
    { name: 'Meat & Poultry', image: cat3 },
    { name: 'Fish & Seafood', image: cat4 },
    { name: 'Dairy & Eggs', image: cat5 },
    { name: 'Milk & Drinks', image: cat6 },
];

function ShopByCategory() {
    return (
        <section className="shop-by-category">

            <div className="category-header">
                <h2>Shop By Category</h2>
                <a href="#" className="shop-all-link">Shop all categories</a>
            </div>

            <div className="category-grid">
                {categoriesData.map((category, index) => (
                    <div className="category-item" key={index}>
                        <div className="category-image">
                            <img src={category.image} alt={category.name} />
                        </div>
                        <p className="category-name">{category.name}</p>
                    </div>
                ))}
            </div>

        </section>
    );
}

export default ShopByCategory;