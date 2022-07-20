import React, { useState, useEffect, useContext } from "react";
import "../../styles/demo.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";




export const Cards = ({ name, id }) => {

    const { store, actions } = useContext(Context);



    return (

        <div className="container-fluid py-2" id="scrollhorizontal" key={id}>
            <h1 style={{ color: "red" }}>{name}</h1>
            <div className="d-flex flex-row flex-nowrap">
                <div className="text-center mx-3 my-3" style={{ width: "18rem" }}>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src="..." className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="{el.url}" className="btn btn-primary">Más</a>
                        </div>
                    </div>
                </div>






            </div>
        </div>
    )
}
