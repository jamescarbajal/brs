import { useState, useEffect, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { AccountButton, AccountCard, FloatingHeader, ColumnContainer, StyledButton, AccountLink } from "./StyledComponents";

export default function UserAccount(props) {

    const { loggedInUser, setLoggedInUser } = useContext(UserContext);

    const navigate = useNavigate();

    const User = JSON.parse(localStorage.getItem('USER_AUTH')) || "";

    const HandleLogout = (e) => {
        e.preventDefault();
        setLoggedInUser("");
        navigate('/Login');
    };

    return(

        <>
            <div style={{ height: '70px' }}></div>
            <h3 class="my-3 text-muted">YOUR ACCOUNT</h3>
            <ColumnContainer>
                <div class="container-fluid row d-flex flex-row justify-content-evenly align-items-evenly">
                    <AccountCard class="col-12 col-md-6">
                        <h2 class="my-2 text-center">Account Info</h2>
                        <div>UserID: </div>
                        <div>Email: {User}</div>
                        <div>Recovery Email:</div>
                        <div>Password: ********** <span><AccountLink href='#'>Change Password</AccountLink></span></div>
                    </AccountCard>
                    <AccountCard class="col-12 col-md-6">
                        <h3 class="my-2 text-center">User Profile</h3>
                        <div>Name: </div>
                        <div>Phone Number: </div>
                        <div>Shipping Address: </div>
                        <div>Billing Address: </div>
                    </AccountCard>
                </div>
                <h3 class="my-4 text-muted">ORDER HISTORY</h3>
                <div class="container-fluid row d-flex flex-row justify-content-evenly align-items-evenly">
                    <AccountCard class="col-12 col-md-6">
                        <h3 class=" my-2 text-center">Current Order</h3>
                        <div>Balance/Credit:</div>
                        <div>Current: <span class="mx-4"><AccountLink href='#'>Cancel Order</AccountLink></span></div>
                        <div>Total: </div>
                        <div>Track Shipping: </div>
                    </AccountCard>
                    <AccountCard class="col-12 col-md-6">
                        <h3 class="my-2 text-center">Previous Orders</h3>
                        <div>Most Recent: </div>
                        <div>Status: </div>
                        <div>Returns: N/A <span><AccountLink href="#">Request Return</AccountLink></span></div>
                        <a href='#' style={{textDecoration: 'none', textAlign: 'center' }} class="mx-auto">View All Previous Orders</a>
                    </AccountCard>
                </div>
                    <AccountButton onClick={HandleLogout}>Logout</AccountButton>
            </ColumnContainer>
        </>

    );
};