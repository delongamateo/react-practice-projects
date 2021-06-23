import "../App.css";

function Product (props) {

    const {name, img_url} = props;

    return (
        <div className="product">
            <img src={img_url} alt="" />
            <div className="name">{name}</div>
        </div>
    )
}

export default Product;