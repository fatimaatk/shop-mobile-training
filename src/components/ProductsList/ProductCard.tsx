import React from "react";
import { Link } from "react-router-dom";
import "./../../css/style.css";

import { useAppSelector, useAppDispatch } from "../../store/hook";

import ProductsType from "../../model/productType";
import { addItemToCart, removeItemToCart } from "../../store/CartTotalSlice";

const ProductCard: React.FC<{
  product: ProductsType;
  brandName?: string;
}> = (props) => {
  const { product } = props;

  //REDUX
  const cartItem = useAppSelector((state) => state.cartItem);
  const dispatch = useAppDispatch();

  const incrementHandlerQty = () => {
    dispatch(
      addItemToCart({
        product,
      })
    );
  };

  const decrementHandlerQty = () => {
    dispatch(
      removeItemToCart({
        product,
      })
    );
  };

  //méthode recherche image
  const folderTitle = (name: string) => {
    if (name.includes("apple")) {
      return "products-img/Apple";
    } else if (name.includes("huawei")) {
      return "products-img/Huawei";
    } else if (name.includes("lg")) {
      return "products-img/LG";
    } else if (name.includes("samsung")) {
      return "products-img/Samsung";
    } else if (name.includes("sony")) {
      return "products-img/Sony";
    }
  };

  const folderLink = folderTitle(product.name);

  //Calcul prix remisé
  let priceBeforeDiscount: number =
    (product.price * product.discountRate) / 100 + product.price;

  return (
    <>
      <div className="col-md-3 col-sm-6">
        <div className="single-shop-product ">
          <Link to={`/product/${product.id}`} className="text-decoration-none">
            <div
              className="product-upper border border-grey d-flex justify-content-center"
              style={{
                width: "100%",
                height: "243px",
              }}
            >
              <img
                className=" p-3 "
                src={`/images/${folderLink}/${product.imageName}`}
                alt=""
              />
            </div>
            <h2 className=" text-capitalize ">{product.name}</h2>
          </Link>

          <div className="product-carousel-price">
            <ins>${product.price}</ins>{" "}
            <del>${priceBeforeDiscount.toFixed(2)}</del>
          </div>

          <div className="product-option-shop">
            <button
              className="add_to_cart_button"
              onClick={incrementHandlerQty}
            >
              Add to cart
            </button>
            {/* <button
              className="add_to_cart_button"
              onClick={decrementHandlerQty}
            >
              Remove to cart
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
