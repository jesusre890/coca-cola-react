import React from "react";

const Footer = () => {
    return (
        <div className="container-fluid bg-secondary">
            <div className="py-5">
                <hr />
                <div className="padreFooter row">
                    <div className="col-md-6 text-light">
                        <p>2022 The Coca-Cola Company. Todos los derechos reservados.</p>
                    </div>
                    <div className="col-md-6 d-flex justify-content-end">
                        <p>
                            <a href={"https://twitter.com/CocaColaCoAR"} target={"_blank"} className="me-3"><img src={"https://res.cloudinary.com/don3phnka/image/upload/v1669674921/Coca-Cola%20React%20js/twitter_circle_v3atbi.svg"} alt="Twiter" width={32}/></a>
                            <a href={"https://www.instagram.com/cocacolacoar/"} target={"_blank"} className="me-3"><img src={"https://res.cloudinary.com/don3phnka/image/upload/v1669674914/Coca-Cola%20React%20js/instagram_circle_om3pxj.svg"} alt="Instagram" width={32}/></a>
                            <a href={"https://www.linkedin.com/company/the-coca-cola-company"} target={"_blank"} className="me-3"><img src={"https://res.cloudinary.com/don3phnka/image/upload/v1669674900/Coca-Cola%20React%20js/linkedin_circle_ufr7re.svg"} alt="Linkedin" width={32}/></a>
                            <a href={"https://www.youtube.com/user/CocaColaCo"} target={"_blank"} className="me-3"><img src={"https://res.cloudinary.com/don3phnka/image/upload/v1669674898/Coca-Cola%20React%20js/ar-es-youtube_circle_mnvxoi.svg"} alt="Youtube" width={32}/></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;