import React from 'react';
import { FaGithub, FaLinkedinIn} from 'react-icons/fa';
import { FaXTwitter, FaMeta } from "react-icons/fa6";
//import { SiHashnode } from 'react-icons/si'

const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            <a href='https://github.com/mesharjeelkhan' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>

            <a href='https://www.linkedin.com/in/sharjeel-khan-0aa968173' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>

            <a href='https://www.facebook.com/share/1BxgyXe9Zs/?mibextid=wwXIfr' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaMeta/>
            </a>

            <a href='https://x.com/furious92127?s=21' className='home__social-link' target='__blank' rel='noreferrer'>
                <FaXTwitter />
            </a>
        </div>
    );
};

export default HeaderSocials;
