import './Carts.css';

function Carts(props) {
    return (
        <div className='product-card'>
            <div className="product-image-container">
                <img src= {props.image_laptop}
                    alt= ''
                    className="product-image"/>
            </div>
            <div className="product-content">
                <div className="product-header">
                    <h3 className="product-name">{props.name}</h3>
                    <p className="product-tagline">{props.tagline || "The power of you best future!"}</p>
                </div>
            
                <div className="product-pricing">
                    <p className="price-main">From ${props.price}</p>
                    <p className="price-monthly">or ${props.price_monthly} per month</p>
                </div>

                <div className="product-actions">
                    <button className="btn-primary">Buy</button>
                    <button className="btn-secondary">Learn more</button>
                </div>
            </div>
        </div>
        );
}

export default Carts;