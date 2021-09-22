import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Cart Component
export const Cart = () => {
    // Fetches cart items from local storage
    const cartItems = JSON.parse(localStorage.getItem("productInfo"));
    let subtotal = 0; // Subtotal Calculates the total amounts in the cart

    return (
        <div>
            {/* Shopping Cart Title */}
            <CartTitle>My Shopping Cart</CartTitle>
            <CartWrapper>
                {/* Each ItemBar produces an item added to cart from LocalStorage */}
                {/* If there is no Items in the cart, the Default Message is Shown First */}

                {cartItems === null || cartItems.length === 0 ?
                <B>Your Cart is Empty</B> :
                <>
                <ItemBar className="listHeader">
                    <B>Product Details</B>
                    <span></span>
                    <B>Price</B>
                </ItemBar>
                <DivLine className="divHeader" />

                {cartItems.map((item, index) => {
                    subtotal += Number(item.price.slice(1,)); // Subtotal Calculated with each item added
                    return (<>
                    <ItemBar>
                        <ItemImg
                            alt={item.name}
                            src={item.imageSrc}
                        />
                        <div><B>{item.name}</B></div>
                        <B>{item.price}</B>
                    </ItemBar>
                    <DivLine />
                    </>)
                })}
                </>}

                {/* Promotional Discounts Added // TODO Maybe Add? */}
                <ItemBar className="totalHead">
                    <B>Promotion: -${0.00 /* Add function here */}</B>
                </ItemBar>
                {/* Subtotal is Calculated Here */}
                <ItemBar className="totalHead">
                    <B>Subtotal: ${subtotal}</B>
                </ItemBar>
                {/* Checkout Tab for Promo Code Addin or Head to Checkout */}
                <CheckoutBar>
                    <div>
                        {false && <R>Thank you! Your Promotion Code has been Applied!</R>}
                        <p>If you have a promotion code, please enter it here:</p>
                        <PromoForm onClick={(e) => {
                            e.preventDefault() /* Perhaps a Function Here Could Do? */
                        }}>
                            <PromoInput placeholder="Enter your Promotion Code" />
                            <ApplyPromo type="submit" value="Apply Discount" />
                        </PromoForm>
                    </div>
                    {/* Link will take you to "Checkout Page" */}
                    <Link to="/checkout"><ToCheckOut>Check Out</ToCheckOut></Link>
                </CheckoutBar>
            </CartWrapper>
        </div>
    )
};

// Styled Components
const CartTitle = styled.h2`
    text-align: center;
    padding: 50px 0 0;
    margin-bottom: 20px;
    font-size: x-large;
`;

const CartWrapper = styled.div`
    margin: auto 200px;
    padding: 20px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    height: 100%;
    background: #fff;
    border: 1px solid #888888;
    border-radius: 10px;
    box-shadow: 5px 5px 4px #888888;
`;

const ItemBar = styled.div`
    margin: 0 20px 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    & > div {flex-wrap: wrap};
    &.listHeader {margin-bottom: 2px};
    &.totalHead {justify-content: flex-end};
`;

const ItemImg = styled.img`
    height: 100px;
    width: 100px;
`;

const B = styled.p`
    font-weight: bold;
`;

const R = styled.p`
    color: crimson;
`;

const DivLine = styled.div`
    margin: 5px 0;
    background: #888888;
    height: 1px;
    width: 100%;
    &.divHeader {margin: 0 0 5px};
`;

const CheckoutBar = styled.div`
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const PromoForm = styled.form`
    display: flex;
    flex-direction: row;
    margin-top: 10px;
`;

const PromoInput = styled.input`
    font-size: 14px;
    width: 245px;
    height: 40px;
    margin-right: 10px;
`;

const ApplyPromo = styled(PromoInput)`
    max-width: 150px;
`;

const ToCheckOut = styled.button`
    padding: 20px 50px;
`;