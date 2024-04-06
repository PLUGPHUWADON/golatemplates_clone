import { useState } from 'react'

function header() {
    const [clickmenu, setclickmenu] = useState(false);

    const toggle = () => {
        setclickmenu(!clickmenu);
    }

    return(
       <header className="header">
            <nav>
                <div>
                    <img src="https://assets-global.website-files.com/639e3a353adcb6fb6ebe6825/639e3c8de9b4744e5423bbd4_logo.svg" alt="" />
                </div>
                <div className="menu" onClick={toggle}>
                    <span className={clickmenu ? "addspanx1" : ""}></span>
                    <span className={clickmenu ? "addhidspan2" : ""}></span>
                    <span className={clickmenu ? "addspanx2" : ""}></span>
                </div>
                <ul className={clickmenu ? "addshowmenu" : "addhiddenmenu"}>
                    <li><a href="#">Webflow Templates</a></li>
                    <li><a href="#">Framer Templates</a></li>
                    <li><a href="#">Free Templates</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
            </nav>
       </header>
    );
}

export default header;