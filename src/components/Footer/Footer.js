import './Footer.css'
import { GitHub } from '@mui/icons-material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer (){
    return(
        <div className="Footer">
            <a href='https://www.linkedin.com/in/franco-visintini' >
                <LinkedInIcon fontSize='large'/>
            </a>
            <a href='https://github.com/FrancoVisintini' >
                <GitHub fontSize='large'/>
            </a>
            
            <span>Designed by Franco Visintini</span>
        </div>
        
    )
}