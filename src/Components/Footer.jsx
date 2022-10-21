import React from "react";

function Footer() {

const  currentDate = new Date().toJSON().slice(0, 10);


    return (
    <div className="footer">
        <h3>Made with❤️by Sania Singh</h3>
         <p>©️{currentDate}</p>

    </div>
    )
}


export default Footer;