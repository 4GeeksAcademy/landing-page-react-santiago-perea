import React from "react";

import Card from "./Card"

export default function CardsRow() {
    return (
        <div className="container text-center p-5">
            <div className="row align-items-center">
                <div className="col"><Card /></div>
                <div className="col"><Card /></div>
                <div className="col"><Card /></div>
                <div className="col"><Card /></div>
            </div>
        </div>
    )
};