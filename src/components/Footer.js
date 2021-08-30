import React from 'react'
import * as Icons from 'react-icons/fa';
import { IconContext } from 'react-icons';

const Footer = () => {
    return (
        <div className="footer">
            <p>Copyright &copy; Eliza Kirberger 2021</p>
           <p>
            <IconContext.Provider value={{className: "footerIcons"}}>
                <Icons.FaReact /> <Icons.FaHtml5 /> <Icons.FaCss3 /><Icons.FaNodeJs />
           </IconContext.Provider>
           </p>
        </div>
    )
}

export default Footer
