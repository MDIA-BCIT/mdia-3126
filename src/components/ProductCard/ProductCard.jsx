import "./ProductCard.css";
import Button from "../Button/Button.jsx";

export default function ProductCard({
    onSale = false,
    name,
    image,
    price,
    description,
    modifier,
    buttonClick,
    backgroundColor,
}) {
    const salePrice = price * 0.8;

    return (
        <article className={`product-card product-card--${modifier}`}>
            <div
                className='product-card__image'
                style={{ backgroundColor }}
            >
                {image}
            </div>
            <div className='product-card__details'>
                <h2 className='product-card__title'>{name}</h2>
                <p
                    className={`product-card__price ${onSale && "product-card__price--sale"}`}
                >
                    {onSale ? salePrice.toFixed(2) : price}
                </p>
                <p className='product-card__description'>{description}</p>
                <Button
                    modifier='secondary'
                    onClick={buttonClick}
                >
                    Buy Now!
                </Button>
            </div>
        </article>
    );
}
