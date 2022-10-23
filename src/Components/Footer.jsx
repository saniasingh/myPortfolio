import React from "react";

function Footer() {

const  currentDate = new Date().getFullYear().toString();


    return (
    <div className="footer">
        <h6>Made with ❤️ by Sania Singh</h6>
         <p>©️{currentDate}</p>

    </div>
    )
}


export default Footer;