import * as P from './styles/products';
import { Container, HeroWrap, HeroImg, HeroTxt, HTitle, HDesc, HBtn, SnBtn } from '../hero/style/hero'
import Slide from '../slide';




export default function Products() {

    return (
        <>
        <Container>
            <P.ProductList>
                <P.ProductItem>
                    <img src="./img/gldn-CP-Windows11-GlobalLaunch.jpeg" alt="" />
                    <h3>Designed for life today—and tomorrow</h3>
                    <p>The next-generation of games. Your goals. Friends and family. Windows 11 was made to bring you closer to everything you love.</p>
                    <P.Sp>
                     <span>See if your PC is ready</span> <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </P.Sp>
                </P.ProductItem>
                <P.ProductItem>
                    <img src="./img/gldn-MSFT-CP-Edge.jpeg" alt="" />
                    <h3>Microsoft Edge</h3>
                    <p>World-class performance with more privacy, more productivity, and more value while you browse.</p>
                    <P.Sp>
                     <span>Download now</span> <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </P.Sp>
                </P.ProductItem>
                <P.ProductItem>
                    <img src="./img/gldn-Soft-CP-OneDriveCampaignRefresh-2.jpeg" alt="" />
                    <h3>Microsoft OneDrive</h3>
                    <p>Save your files and photos to OneDrive and access them from any device, anywhere.</p>
                    <P.Sp>
                     <span>Learn more</span> <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </P.Sp>
                </P.ProductItem>
                <P.ProductItem>
                    <img src="./img/Content-Card-PC-SMB-OneNote.jpeg" alt="" />
                    <h3>OneNote</h3>
                    <p>Organize your notes and your life.</p>
                    <P.Sp>
                     <span>Learn more</span> <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </P.Sp>
                </P.ProductItem>
            </P.ProductList>
            
            <HeroWrap text='#ffff' bg='#e9e5e5'>
               
                 <HeroImg>
                    <img src="./img/gldn-Hero-MSCOM-Outlook-iOS-Android_VP1-539x440.jpeg" alt="" />
                </HeroImg>

                <HeroTxt>
                    <HTitle>
                Outlook for iOS and Android
                    </HTitle>
                    <HDesc>
                    Connect. Organize. Get things done.    
                      </HDesc>
                    <HBtn inv={true}>
                        Download Now
                    </HBtn>
                  
                </HeroTxt>
               
            </HeroWrap>
        
        
            <h2 style={{color:'black', marginBottom:'-10px', marginTop:'50px'}}>For business</h2>

            <P.ProductList >
            
                <P.ProductItem>
                    <img src="./img/gldn-CP-Microsoft-Teams-Commercial.jpeg" alt="" />
                    <h3>Get Microsoft Teams for free</h3>
                    <p>Online meetings, chat, and shared cloud storage—all in one place.</p>
                    <P.Sp>
                     <span>Sign up for free</span> <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </P.Sp>
                </P.ProductItem>
                <P.ProductItem>
                    <img src="./img/gldn-M365-CP-Microsoft365-Commercial.jpeg" alt="" />
                    <h3>Microsoft 365 for business</h3>
                    <p>Stay a step ahead with powerful apps for productivity, connection, and security.</p>
                    <P.Sp>
                     <span>Shop now</span> <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </P.Sp>          
                          </P.ProductItem>
                <P.ProductItem>
                    <img src="./img/gldn-CP-MSCOM-Viva-3.jpeg" alt="" />
                    <h3>Microsoft Viva</h3>
                    <p>Discover the new employee experience platform designed to help people connect, focus, learn, and thrive at work.</p>
                    <P.Sp>
                     <span>Learn more</span> <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </P.Sp>
                        </P.ProductItem>
                <P.ProductItem>
                    <img src="./img/JIC-DPS-CP01.jpeg" alt="" />
                    <h3>Welcome to your Windows 365 Cloud PC</h3>
                    <p>Stay a step ahead with powerful apps for productivity, connection, and security.</p>
                    <P.Sp>
                     <span>Get it today</span> <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </P.Sp>
                       </P.ProductItem>
            </P.ProductList>


            <div style={{display:'flex',margin:'40px 12px', marginLeft:'7px',}}>
                <p style={{marginRight:'25px', fontSize:'1rem'}}>Follow Microsoft</p>
                 <i style={{marginRight:'25px', fontSize:'23px'}} class="fa-brands fa-twitter" aria-hidden="true"></i>  
              
                 <i style={{marginRight:'25px', fontSize:'23px'}} class="fa-brands fa-linkedin" aria-hidden="true"></i>              </div>

            {/* <Slide>
                <HeroWrap text='#fff' bg='#0f0f0f'>
                    <HeroImg>
                        <img src="./img/player.png" alt="" />
                    </HeroImg>
                    <HeroTxt>
                        <HTitle>
                            Innovating game day
                    </HTitle>
                        <HDesc>
                            Powered by Microsoft Azure, NBA CourtOptix leverages the power of AI to create next-level data and metrics--and give fans a fresh perspective                    </HDesc>
                        <HBtn inv>
                            Learn more
                    </HBtn>

                    </HeroTxt>
                </HeroWrap>
                <HeroWrap inv bg='#ccd5e6'>
                    <HeroTxt>
                        <HTitle>
                            A look inside datacenters
                    </HTitle>
                        <HDesc>
                            Take a 3D tour through an interactive website that explores technology powering the Microsoft Cloud
                    </HDesc>
                        <HBtn>
                            Explore datacenters
                    </HBtn>
                    </HeroTxt>
                    <HeroImg>
                        <img src="./img/field.png" alt="" />
                    </HeroImg>
                </HeroWrap>
            </Slide> */}
        </Container>
        </>
    )
}