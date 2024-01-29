import React from 'react'
import { Navbar } from '../../components/navbar/navbar'; // Import the navbar component into all files.
import './members.css';

export const Members = () => {
  return (
    <div>
      <Navbar />

      {/* actual main content */}
      <div className="members_section">

        <h1>E-Board</h1>
        <div className="members-cards-container">

          <a href="https://www.linkedin.com/in/paul-lee-55119725a/">
            <div className="member_card">
              <img src='../../images/KTP/Headshots/Founder Headshots/Paul1.webp' alt="Paul Lee Headshot" loading="lazy" />
              <h2>Paul Lee<br/><span style={{color: "#7ac6d6"}}>Co-President</span></h2>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/tye-robison-7a2aa9259/">
            <div className="member_card">
              <img src='../../images/KTP/Headshots/Founder Headshots/Tye1.webp' alt="Tye Robison Headshot" loading="lazy" />
              <h2>Tye Robison<br/><span style={{color: "#7ac6d6"}}>Co-President</span></h2>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/evan-lapid-077478256/">
            <div className="member_card">
              <img src='../../images/KTP/Headshots/Founder Headshots/Evan1.webp' alt="Evan Lapid Headshot" loading="lazy" />
              <h2>Evan Lapid<br/><span style={{color: "#7ac6d6"}}>Vice President of External Affairs</span></h2>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/evan-lapid-077478256/">
            <div className="member_card">
              <img src='../../images/KTP/Headshots/Alpha Headshots/Julia1-min.webp' alt="Julia Flynn Headshot" loading="lazy" />
              <h2>Julia Flynn<br/><span style={{color: "#7ac6d6"}}>Vice President of Internal Affairs</span></h2>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/anissa-patel/">
            <div className="member_card">
              <img src='../../images/KTP/Headshots/Founder Headshots/Anissa1.webp' alt="Anissa Patel Headshot" loading="lazy" />
              <h2>Anissa Patel<br/><span style={{color: "#7ac6d6"}}>Vice President of Professional Development</span></h2>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/pblej/">
            <div className="member_card">
              <img src='../../images/KTP/Headshots/Founder Headshots/Patrick1.webp' alt="Patrick Blejwas Headshot" loading="lazy" />
              <h2>Patrick Blejwas<br/><span style={{color: "#7ac6d6"}}>Vice President of Technical Development</span></h2>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/jaden-hsiao-b72a7b24b/">
            <div className="member_card">
              <img src='../../images/KTP/Headshots/Founder Headshots/Jaden1.webp' alt="Jaden Hsiao Headshot" loading="lazy" />
              <h2>Jaden Hsiao<br/><span style={{color: "#7ac6d6"}}>Co-Vice President of Engagement</span></h2>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/tim-mccorry-reynolds-2571b321a/">
            <div className="member_card">
              <img src='../../images/KTP/Headshots/Alpha Headshots/Tim1-min.webp' alt="Tim McCorry Headshot" loading="lazy" />
              <h2>Tim McCorry<br/><span style={{color: "#7ac6d6"}}>Co-Vice President of Engagement</span></h2>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/ryan-chase-84ab8a215/">
            <div className="member_card">
              <img src='../../images/KTP/Headshots/Alpha Headshots/Ryan1-min.webp' alt="Ryan Chase Headshot" loading="lazy" />
              <h2>Ryan Chase<br/><span style={{color: "#7ac6d6"}}>Vice President of Membership</span></h2>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/camille-kathleen-herzog/">
            <div className="member_card">
              <img src='../../images/KTP/Headshots/Founder Headshots/Camille1.webp' alt="Camille Herzog Headshot" loading="lazy" />
              <h2>Camille Herzog<br/><span style={{color: "#7ac6d6"}}>Vice President of Marketing</span></h2>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/george-audi-83182525a/">
            <div className="member_card">
              <img src='../../images/KTP/Headshots/Founder Headshots/George1.webp' alt="George Audi Headshot" loading="lazy" />
              <h2>George Audi<br/><span style={{color: "#7ac6d6"}}>Vice President of Finances</span></h2>
            </div>
          </a>
        </div>

        {/* may have forgotten Josh Leeds */}

        {/* <h1>Beta Class</h1>

        <div className="small-members-cards-container">

          <a href="https://www.linkedin.com/in/amanda-atlas-78658a293/">
              <div className="small_member_card">
                  <img src="images/Beta Headshots/Amanda1.jpg" alt="">
                  <h2>Amanda Atlas</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/ishanbhattacharjee/">
              <div className="small_member_card">
                  <img src="images/Beta Headshots/Ishan1.jpg" alt="">
                  <h2>Ishan Bhattacharjee</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/fynnbuesnel/">
              <div className="small_member_card">
                  <img src="images/Beta Headshots/Fynn1.jpg" alt="">
                  <h2>Fynn Buesnel</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/ryanwfcheng/">
              <div className="small_member_card">
                  <img src="images/Beta Headshots/Ryan1.jpg" alt="">
                  <h2>Ryan Cheng</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/seth-culberson/">
              <div className="small_member_card">
                  <img src="images/Beta Headshots/Seth1.jpg" alt="">
                  <h2>Seth Culberson</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/nicholasedavid/">
              <div className="small_member_card">
                  <img src="images/Beta Headshots/Nick1.jpg" alt="">
                  <h2>Nick David</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/jakedietiker/">
              <div className="small_member_card">
                  <img src="images/Beta Headshots/Jake1.jpg" alt="">
                  <h2>Jake Dietiker</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/onat-ergin/">
              <div className="small_member_card">
                  <img src="images/Beta Headshots/Onat1.jpg" alt="">
                  <h2>Onat Ergin</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/mikayla-grymes-b2476928b/">
              <div className="small_member_card">
                  <img src="images/Beta Headshots/Mikayla1.jpg" alt="">
                  <h2>Mikayla Grymes</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/cooper-hassman/">
              <div className="small_member_card">
                  <img src="images/Beta Headshots/Cooper1.jpg" alt="">
                  <h2>Cooper Hassman</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/rohanh10/">
              <div className="small_member_card">
                  <img src="images/Beta Headshots/Rohan1.jpg" alt="">
                  <h2>Rohan Hegde</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/huang-patty/">
              <div className="small_member_card">
                  <img src="images/Beta Headshots/Patty1.jpg" alt="">
                  <h2>Patty Huang</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/jack-hutchison-/">
              <div className="small_member_card">
                  <img src="images/Beta Headshots/Jack1.jpg" alt="">
                  <h2>Jack Hutchison</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/jennifer-ji-9090/">
              <div className="small_member_card">
                  <img src="images/Beta Headshots/Jennifer1.jpg" alt="">
                  <h2>Jennifer Ji</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/dom-/">
              <div className="small_member_card">
                  <img src="images/Beta Headshots/Dom1.jpg" alt="">
                  <h2>Dominic Laiosa</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/drrenleong/">
              <div className="small_member_card">
                  <img src="images/Beta Headshots/Darren1.jpg" alt="">
                  <h2>Darren Leong</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/sara-mcdermott-422700297/">
              <div className="small_member_card">
                  <img src="images/Beta Headshots/Sara1.jpg" alt="">
                  <h2>Sara McDermott</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/nicole-nemerson-a7a5a8297/">
              <div className="small_member_card">
                  <img src="images/Beta Headshots/Nikki1.jpg" alt="">
                  <h2>Nicole Nemerson</h2>
              </div>
          </a>
      
          <a href="https://www.linkedin.com/in/eric-nohara-leclair-189298291/">
              <div className="small_member_card">
                  <img src="images/Beta Headshots/Eric1.jpg" alt="">
                  <h2>Eric Nohara-LeClair</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/julianna-perucci-631674291/">
              <div className="small_member_card">
                  <img src="images/Beta Headshots/Julianna1.jpg" alt="">
                  <h2>Julianna Perucci</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/makayla-tajalle/">
              <div className="small_member_card">
                  <img src="images/Beta Headshots/Makayla1.jpg" alt="">
                  <h2>Makayla Tajalle</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/katherine-vona/">
              <div className="small_member_card">
                  <img src="images/Beta Headshots/Katie1.jpg" alt="">
                  <h2>Katie Vona</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/kylecyu/">
              <div className="small_member_card">
                  <img src="images/Beta Headshots/Kyle1.jpg" alt="">
                  <h2>Kyle Yu</h2>
              </div>
          </a>

        </div> */}
{/* 
        <h1>Alpha Class</h1>

        <div className="small-members-cards-container">

          <a href="https://www.linkedin.com/in/andrea-balaguer/">
              <div className="small_member_card">
                  <img src="images/Alpha Headshots/Andrea1.jpg" alt="">
                  <h2>Andrea Balaguer</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/thomasboles21/">
              <div className="small_member_card">
                  <img src="images/Alpha Headshots/Thomas1.jpg" alt="">
                  <h2>Thomas Boles</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/ryan-chase-84ab8a215/">
              <div className="small_member_card">
                  <img src="images/Alpha Headshots/Ryan1.jpg" alt="">
                  <h2>Ryan Chase</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/dichen09/">
              <div className="small_member_card">
                  <img src="images/Alpha Headshots/Di1.jpg" alt="">
                  <h2>Di Chen</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/grace-dai-bu/">
              <div className="small_member_card">
                  <img src="images/Alpha Headshots/Grace1.jpg" alt="">
                  <h2>Grace Dai</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/eliott-dinfotan/">
              <div className="small_member_card">
                  <img src="images/Alpha Headshots/Eliott1.jpg" alt="">
                  <h2>Eliott Dinfotan</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/mferiancek/">
              <div className="small_member_card">
                  <img src="images/Alpha Headshots/Matthew1.jpg" alt="">
                  <h2>Matthew Ferianeck</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/julia-flynn-564324212/">
              <div className="small_member_card">
                  <img src="images/Alpha Headshots/Julia1.jpg" alt="">
                  <h2>Julia Flynn</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/zach-gentile-b4b86726a/">
              <div className="small_member_card">
                  <img src="images/Alpha Headshots/Zach1.jpg" alt="">
                  <h2>Zach Gentile</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/ericgulottyjr/">
              <div className="small_member_card">
                  <img src="images/Alpha Headshots/Gulotty1.jpg" alt="">
                  <h2>Eric Gulotty</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/juyoung-kim-091645267/">
              <div className="small_member_card">
                  <img src="images/Alpha Headshots/Kim1.jpg" alt="">
                  <h2>Eric Kim</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/rohan-kumar-in/">
              <div className="small_member_card">
                  <img src="images/Alpha Headshots/Rohan1.jpg" alt="">
                  <h2>Rohan Kumar</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/dlaboy21/">
              <div className="small_member_card">
                  <img src="images/Alpha Headshots/Derek1.jpg" alt="">
                  <h2>Derek Laboy</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/josh-leeds-a21232260/">
              <div className="small_member_card">
                  <img src="images/Alpha Headshots/Josh1.jpg" alt="">
                  <h2>Josh Leeds</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/anniealiang/">
              <div className="small_member_card">
                  <img src="images/Alpha Headshots/Annie1.jpg" alt="">
                  <h2>Annie Liang</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/tim-mccorry-reynolds-2571b321a/">
              <div className="small_member_card">
                  <img src="images/Alpha Headshots/Tim1.jpg" alt="">
                  <h2>Tim McCorry</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/madison-mcdonald-484929219/">
              <div className="small_member_card">
                  <img src="images/Alpha Headshots/Madison1.jpg" alt="">
                  <h2>Madison McDonald</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/wyatt-napier/">
              <div className="small_member_card">
                  <img src="images/Alpha Headshots/Wyatt1.jpg" alt="">
                  <h2>Wyatt Napier</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/samoffsey/">
              <div className="small_member_card">
                  <img src="images/Alpha Headshots/Sam1.jpg" alt="">
                  <h2>Sam Offsey</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/yana-pathak/">
              <div className="small_member_card">
                  <img src="images/Alpha Headshots/Yana1.jpg" alt="">
                  <h2>Yana Pathak</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/nathan-pike-196143256/">
              <div className="small_member_card">
                  <img src="images/Alpha Headshots/Nathan1.jpg" alt="">
                  <h2>Nathan Pike</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/beatrizp%C3%A9rez602/">
              <div className="small_member_card">
                  <img src="images/Alpha Headshots/Beatriz1.jpg" alt="">
                  <h2>Beatriz Pérez</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/carol-riady-2390b61b9/">
              <div className="small_member_card">
                  <img src="images/Alpha Headshots/Carol1.jpg" alt="">
                  <h2>Carol Riady</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/griffin-tomko-82b17226b/">
              <div className="small_member_card">
                  <img src="images/Alpha Headshots/Griffin1.jpg" alt="">
                  <h2>Griffin Tomko</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/victor-verma-91713022b/">
              <div className="small_member_card">
                  <img src="images/Alpha Headshots/Victor1.jpg" alt="">
                  <h2>Victor Verma</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/sara-wishner-2a90a0241/">
              <div className="small_member_card">
                  <img src="images/Alpha Headshots/Sara1.jpg" alt="">
                  <h2>Sara Wishner</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/wongb4/">
              <div className="small_member_card">
                  <img src="images/Alpha Headshots/Brandon1.jpg" alt="">
                  <h2>Brandon Wong</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/jenny-yang-ab2b6982/">
              <div className="small_member_card">
                  <img src="images/Alpha Headshots/Jenny1.jpg" alt="">
                  <h2>Jenny Yang</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/richard-yang-a9ba65261/">
              <div className="small_member_card">
                  <img src="images/Alpha Headshots/Richard1.jpg" alt="">
                  <h2>Richard Yang</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/tiffanyyyu/">
              <div className="small_member_card">
                  <img src="images/Alpha Headshots/Tiffany1.jpg" alt="">
                  <h2>Tiffany Yu</h2>
              </div>
          </a>

        </div> */}
{/* 
        <h1><span style="color: #a3e4a3;">"</span> Founding Members</h1>

        <div className="small-members-cards-container">

            <a href="https://www.linkedin.com/in/paul-lee-55119725a/">
                <div className="small_member_card">
                    <img src="images/EBoard Headshots/Paul1.jpg" alt="">
                    <h2>Paul Lee</h2>
                </div>
            </a>

            <a href="https://www.linkedin.com/in/tye-robison-7a2aa9259/">
                <div className="small_member_card">
                    <img src="images/EBoard Headshots/Tye1.jpg" alt="">
                    <h2>Tye Robison</h2>
                </div>
            </a>

            <a href="https://www.linkedin.com/in/evan-lapid-077478256/">
                <div className="small_member_card">
                    <img src="images/EBoard Headshots/Evan1.jpg" alt="">
                    <h2>Evan Lapid</h2>
                </div>
            </a>

            <a href="https://www.linkedin.com/in/jaden-hsiao-b72a7b24b/">
                <div className="small_member_card">
                    <img src="images/EBoard Headshots/Jaden1.jpg" alt="">
                    <h2>Jaden Hsiao</h2>
                </div>
            </a>

            <a href="https://www.linkedin.com/in/anissa-patel/">
                <div className="small_member_card">
                    <img src="images/EBoard Headshots/Anissa1.jpg" alt="">
                    <h2>Anissa Patel</h2>
                </div>
            </a>

            <a href="https://www.linkedin.com/in/pblej/">
                <div className="small_member_card">
                    <img src="images/EBoard Headshots/Patrick1.jpeg" alt="">
                    <h2>Patrick Blejwas</h2>
                </div>
            </a>

            <a href="https://www.linkedin.com/in/peachy-malik-b46a42220/">
                <div className="small_member_card">
                    <img src="images/EBoard Headshots/Peachy1.jpg" alt="">
                    <h2>Peachy Malik</h2>
                </div>
            </a>

            <a href="https://www.linkedin.com/in/camille-kathleen-herzog/">
                <div className="small_member_card">
                    <img src="images/EBoard Headshots/Camille1.jpg" alt="">
                    <h2>Camille Herzog</h2>
                </div>
            </a>

            <a href="https://www.linkedin.com/in/george-audi-83182525a/">
                <div className="small_member_card"">
                    <img src="images/EBoard Headshots/George1.jpg" alt="">
                    <h2>George Audi</h2>
                </div>
            </a>

            <a href="https://www.linkedin.com/in/rylie-love-6b608224b/">
                <div className="small_member_card">
                    <img src="images/EBoard Headshots/Rylie 1.jpg" alt="">
                    <h2>Rylie Love<br/></h2>
                </div>
            </a>

        </div> */}
      </div>
    </div>
  );
}