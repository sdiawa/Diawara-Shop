import React from "react";

export default function CartColumns (){
    return (
        <div className="container-fluid text-center d-none d-lg-block">
            <div className="row">

                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">PRODUITS</p>
                </div>

                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">NOM DU PRODUIT</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">PRIX</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">QUANTITE</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">SUPPRIMER</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">TOTAL</p>
                </div>

            </div>

        </div>
    )

}