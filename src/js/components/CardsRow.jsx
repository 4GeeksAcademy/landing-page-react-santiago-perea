import React from "react";

import Card from "./Card"

export default function CardsRow() {
    return (
        <div className="container text-center">
            <div className="row">
                <div className="col"><Card /></div>
                <div className="col"><Card /></div>
                <div className="col"><Card /></div>
                <div className="col"><Card /></div>
            </div>
        </div>
    )
};