import Slide from "../slide";
import * as HS from './style/hero';
import {useState} from 'react';



export default function Hero() {
    const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

    return (
        <>
            <HS.Container>
              
                    <HS.HeroWrap inv>
                        <HS.HeroTxt>
                            <HS.HTitle>
                            Microsoft 365
                    </HS.HTitle>
                            <HS.HDesc>
                            Premium Office apps, extra cloud storage, advanced security, and more—all in one convenient subscription
                    </HS.HDesc>
                            <HS.HBtn>
                                For 1 person
                    </HS.HBtn> 
                     <span  
                    onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave} style={{
                        color:'#0067b8',
                        transition: '0.2s',
                        marginLeft:'25px',
                        marginRight:'7px',
                        fontWeight:600,
                        cursor:'pointer',
                        paddingRight: isHovering ? '5px' : '',
                        textDecoration: isHovering ? 'underline' : ''

                    }}>For up to 6 people  
                    </span><i class="fa fa-angle-right" aria-hidden="true" style={{
                        color: '#0067b8',
                    }}></i>
                    
                        </HS.HeroTxt>
                        <HS.HeroImg>
                            <img src="./img/home.jpeg" alt="" />
                        </HS.HeroImg>
                    </HS.HeroWrap>
            </HS.Container>
           
        </>
    )
}