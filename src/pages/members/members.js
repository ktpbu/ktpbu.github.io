import React from 'react'
import { Navbar } from '../../components/navbar/navbar'; // Import the navbar component into all files.
import './members.css';

// Beta Class
import AmandaAtlas from '../../images/KTP/Headshots/Beta Headshots/Amanda1.webp';
import IshanBhattacharjee from '../../images/KTP/Headshots/Beta Headshots/Ishan1.webp';
import FynnBuesnel from '../../images/KTP/Headshots/Beta Headshots/Fynn1.webp';
import RyanCheng from '../../images/KTP/Headshots/Beta Headshots/Ryan1.webp';
import SethCulberson from '../../images/KTP/Headshots/Beta Headshots/Seth1.webp';
import NickDavid from '../../images/KTP/Headshots/Beta Headshots/Nick1.webp';
import JakeDietiker from '../../images/KTP/Headshots/Beta Headshots/Jake1.webp';
import OnatErgin from '../../images/KTP/Headshots/Beta Headshots/Onat1.webp';
import MikaylaGrymes from '../../images/KTP/Headshots/Beta Headshots/Mikayla1.webp';
import CooperHassman from '../../images/KTP/Headshots/Beta Headshots/Cooper1.webp';
import RohanHegde from '../../images/KTP/Headshots/Beta Headshots/Rohan1.webp';
import PattyHuang from '../../images/KTP/Headshots/Beta Headshots/Patty1.webp';
import JackHutchison from '../../images/KTP/Headshots/Beta Headshots/Jack1.webp';
import JenniferJi from '../../images/KTP/Headshots/Beta Headshots/Jennifer1.webp';
import DominicLaiosa from '../../images/KTP/Headshots/Beta Headshots/Dom1.webp';
import DarrenLeong from '../../images/KTP/Headshots/Beta Headshots/Darren1.webp';
import SaraMcDermott from '../../images/KTP/Headshots/Beta Headshots/Sara1.webp';
import NicoleNemerson from '../../images/KTP/Headshots/Beta Headshots/Nikki1.webp';
import EricNoharaLeClair from '../../images/KTP/Headshots/Beta Headshots/Eric1.webp';
import JuliannaPerucci from '../../images/KTP/Headshots/Beta Headshots/Julianna1.webp';
import MakaylaTajalle from '../../images/KTP/Headshots/Beta Headshots/Makayla1.webp';
import KatieVona from '../../images/KTP/Headshots/Beta Headshots/Katie1.webp';
import KyleYu from '../../images/KTP/Headshots/Beta Headshots/Kyle1.webp';

// Alpha Class
import AndreaBalaguer from '../../images/KTP/Headshots/Alpha Headshots/Andrea1-min.webp';
import ThomasBoles from '../../images/KTP/Headshots/Alpha Headshots/Thomas1-min.webp';
import RyanChase from '../../images/KTP/Headshots/Alpha Headshots/Ryan1-min.webp';
import DiChen from '../../images/KTP/Headshots/Alpha Headshots/Di1-min.webp';
import GraceDai from '../../images/KTP/Headshots/Alpha Headshots/Grace1-min.webp';
import EliottDinfotan from '../../images/KTP/Headshots/Alpha Headshots/Eliott1-min.webp';
import MatthewFerianeck from '../../images/KTP/Headshots/Alpha Headshots/Matthew1-min.webp';
import JuliaFlynn from '../../images/KTP/Headshots/Alpha Headshots/Julia1-min.webp';
import ZachGentile from '../../images/KTP/Headshots/Alpha Headshots/Zach1-min.webp';
import EricGulotty from '../../images/KTP/Headshots/Alpha Headshots/Gulotty1-min.webp';
import EricKim from '../../images/KTP/Headshots/Alpha Headshots/Kim1-min.webp';
import RohanKumar from '../../images/KTP/Headshots/Alpha Headshots/Rohan1-min.webp';
import DerekLaboy from '../../images/KTP/Headshots/Alpha Headshots/Derek1-min.webp';
import JoshLeeds from '../../images/KTP/Headshots/Alpha Headshots/Josh1-min.webp';
import AnnieLiang from '../../images/KTP/Headshots/Alpha Headshots/Annie1-min.webp';
import TimMcCorry from '../../images/KTP/Headshots/Alpha Headshots/Tim1-min.webp';
import MadisonMcDonald from '../../images/KTP/Headshots/Alpha Headshots/Madison1-min.webp';
import WyattNapier from '../../images/KTP/Headshots/Alpha Headshots/Wyatt1-min.webp';
import SamOffsey from '../../images/KTP/Headshots/Alpha Headshots/Sam1-min.webp';
import YanaPathak from '../../images/KTP/Headshots/Alpha Headshots/Yana1-min.webp';
import NathanPike from '../../images/KTP/Headshots/Alpha Headshots/Nathan1-min.webp';
import BeatrizPerez from '../../images/KTP/Headshots/Alpha Headshots/Beatriz1-min.webp';
import CarolRiady from '../../images/KTP/Headshots/Alpha Headshots/Carol1-min.webp';
import GriffinTomko from '../../images/KTP/Headshots/Alpha Headshots/Griffin1-min.webp';
import VictorVerma from '../../images/KTP/Headshots/Alpha Headshots/Victor1-min.webp';
import SaraWishner from '../../images/KTP/Headshots/Alpha Headshots/Sara1-min.webp';
import BrandonWong from '../../images/KTP/Headshots/Alpha Headshots/Brandon1-min.webp';
import JennyYang from '../../images/KTP/Headshots/Alpha Headshots/Jenny1-min.webp';
import RichardYang from '../../images/KTP/Headshots/Alpha Headshots/Richard1-min.webp';
import TiffanyYu from '../../images/KTP/Headshots/Alpha Headshots/Tiffany1-min.webp';

// Founding members
import PaulLee from '../../images/KTP/Headshots/Founder Headshots/Paul1.webp';
import TyeRobison from '../../images/KTP/Headshots/Founder Headshots/Tye1.webp';
import EvanLapid from '../../images/KTP/Headshots/Founder Headshots/Evan1.webp';
import AnissaPatel from '../../images/KTP/Headshots/Founder Headshots/Anissa1.webp';
import PatrickBlejwas from '../../images/KTP/Headshots/Founder Headshots/Patrick1.webp';
import JadenHsiao from '../../images/KTP/Headshots/Founder Headshots/Jaden1.webp';
import CamilleHerzog from '../../images/KTP/Headshots/Founder Headshots/Camille1.webp';
import GeorgeAudi from '../../images/KTP/Headshots/Founder Headshots/George1.webp';
import PeachyMalik from '../../images/KTP/Headshots/Founder Headshots/Peachy1.webp';
import RylieLove from '../../images/KTP/Headshots/Founder Headshots/Rylie 1.webp';


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
              <img src={PaulLee} alt="Paul Lee Headshot" loading="lazy" />
              <h2>Paul Lee<br /><span style={{ color: "#7ac6d6" }}>Co-President</span></h2>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/tye-robison-7a2aa9259/">
            <div className="member_card">
              <img src={TyeRobison} alt="Tye Robison Headshot" loading="lazy" />
              <h2>Tye Robison<br /><span style={{ color: "#7ac6d6" }}>Co-President</span></h2>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/evan-lapid-077478256/">
            <div className="member_card">
              <img src={EvanLapid} alt="Evan Lapid Headshot" loading="lazy" />
              <h2>Evan Lapid<br /><span style={{ color: "#7ac6d6" }}>Vice President of External Affairs</span></h2>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/evan-lapid-077478256/">
            <div className="member_card">
              <img src={JuliaFlynn} alt="Julia Flynn Headshot" loading="lazy" />
              <h2>Julia Flynn<br /><span style={{ color: "#7ac6d6" }}>Vice President of Internal Affairs</span></h2>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/anissa-patel/">
            <div className="member_card">
              <img src={AnissaPatel} alt="Anissa Patel Headshot" loading="lazy" />
              <h2>Anissa Patel<br /><span style={{ color: "#7ac6d6" }}>Vice President of Professional Development</span></h2>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/pblej/">
            <div className="member_card">
              <img src={PatrickBlejwas} alt="Patrick Blejwas Headshot" loading="lazy" />
              <h2>Patrick Blejwas<br /><span style={{ color: "#7ac6d6" }}>Vice President of Technical Development</span></h2>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/jaden-hsiao-b72a7b24b/">
            <div className="member_card">
              <img src={JadenHsiao} alt="Jaden Hsiao Headshot" loading="lazy" />
              <h2>Jaden Hsiao<br /><span style={{ color: "#7ac6d6" }}>Co-Vice President of Engagement</span></h2>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/tim-mccorry-reynolds-2571b321a/">
            <div className="member_card">
              <img src={TimMcCorry} alt="Tim McCorry Headshot" loading="lazy" />
              <h2>Tim McCorry<br /><span style={{ color: "#7ac6d6" }}>Co-Vice President of Engagement</span></h2>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/ryan-chase-84ab8a215/">
            <div className="member_card">
              <img src={RyanChase} alt="Ryan Chase Headshot" loading="lazy" />
              <h2>Ryan Chase<br /><span style={{ color: "#7ac6d6" }}>Vice President of Membership</span></h2>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/camille-kathleen-herzog/">
            <div className="member_card">
              <img src={CamilleHerzog} alt="Camille Herzog Headshot" loading="lazy" />
              <h2>Camille Herzog<br /><span style={{ color: "#7ac6d6" }}>Vice President of Marketing</span></h2>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/george-audi-83182525a/">
            <div className="member_card">
              <img src={GeorgeAudi} alt="George Audi Headshot" loading="lazy" />
              <h2>George Audi<br /><span style={{ color: "#7ac6d6" }}>Vice President of Finances</span></h2>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/josh-leeds-a21232260/">
            <div className="member_card">
              <img src={JoshLeeds} alt="Josh Leeds Headshot" />
              <h2>Josh Leeds</h2>
            </div>
          </a>

        </div>


        <h1>Beta Class</h1>

        <div className="small-members-cards-container">

          <a href="https://www.linkedin.com/in/amanda-atlas-78658a293/">
            <div className="small_member_card">
                <img src={AmandaAtlas} alt="Amanda Atlas Headshot" loading="lazy" />
                <h2>Amanda Atlas</h2>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/ishanbhattacharjee/">
              <div className="small_member_card">
                  <img src={IshanBhattacharjee} alt="Ishan Bhattacharjee Headshot" loading="lazy" />
                  <h2>Ishan Bhattacharjee</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/fynnbuesnel/">
              <div className="small_member_card">
                  <img src={FynnBuesnel} alt="Fynn Buesnel Headshot" loading="lazy" />
                  <h2>Fynn Buesnel</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/ryanwfcheng/">
              <div className="small_member_card">
                  <img src={RyanCheng} alt="Ryan Cheng Headshot" loading="lazy" />
                  <h2>Ryan Cheng</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/seth-culberson/">
              <div className="small_member_card">
                  <img src={SethCulberson} alt="Seth Culberson Headshot" loading="lazy" />
                  <h2>Seth Culberson</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/nicholasedavid/">
              <div className="small_member_card">
                  <img src={NickDavid} alt="Nick David Headshot" loading="lazy" />
                  <h2>Nick David</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/jakedietiker/">
              <div className="small_member_card">
                  <img src={JakeDietiker} alt="Jake Dietiker Headshot" loading="lazy" />
                  <h2>Jake Dietiker</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/onat-ergin/">
              <div className="small_member_card">
                  <img src={OnatErgin} alt="Onat Ergin Headshot" loading="lazy" />
                  <h2>Onat Ergin</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/mikayla-grymes-b2476928b/">
              <div className="small_member_card">
                  <img src={MikaylaGrymes} alt="Mikayla Grymes Headshot" loading="lazy" />
                  <h2>Mikayla Grymes</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/cooper-hassman/">
              <div className="small_member_card">
                  <img src={CooperHassman} alt="Cooper Hassman Headshot" loading="lazy" />
                  <h2>Cooper Hassman</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/rohanh10/">
              <div className="small_member_card">
                  <img src={RohanHegde} alt="Rohan Hegde Headshot" loading="lazy" />
                  <h2>Rohan Hegde</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/huang-patty/">
              <div className="small_member_card">
                  <img src={PattyHuang} alt="Patty Huang Headshot" loading="lazy" />
                  <h2>Patty Huang</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/jack-hutchison-/">
              <div className="small_member_card">
                  <img src={JackHutchison} alt="Jack Hutchison Headshot" loading="lazy" />
                  <h2>Jack Hutchison</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/jennifer-ji-9090/">
              <div className="small_member_card">
                  <img src={JenniferJi} alt="Jennifer Ji Headshot" loading="lazy" />
                  <h2>Jennifer Ji</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/dom-/">
              <div className="small_member_card">
                  <img src={DominicLaiosa} alt="Dominic Laiosa Headshot" loading="lazy" />
                  <h2>Dominic Laiosa</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/drrenleong/">
              <div className="small_member_card">
                  <img src={DarrenLeong} alt="Darren Leong Headshot" loading="lazy" />
                  <h2>Darren Leong</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/sara-mcdermott-422700297/">
              <div className="small_member_card">
                  <img src={SaraMcDermott} alt="Sara McDermott Headshot" loading="lazy" />
                  <h2>Sara McDermott</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/nicole-nemerson-a7a5a8297/">
              <div className="small_member_card">
                  <img src={NicoleNemerson} alt="Nicole Nemerson Headshot" loading="lazy" />
                  <h2>Nicole Nemerson</h2>
              </div>
          </a>
      
          <a href="https://www.linkedin.com/in/eric-nohara-leclair-189298291/">
              <div className="small_member_card">
                  <img src={EricNoharaLeClair} alt="Eric Nohara-LeClair Headshot" loading="lazy" />
                  <h2>Eric Nohara-LeClair</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/julianna-perucci-631674291/">
              <div className="small_member_card">
                  <img src={JuliannaPerucci} alt="Julianna Perucci Headshot" loading="lazy" />
                  <h2>Julianna Perucci</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/makayla-tajalle/">
              <div className="small_member_card">
                  <img src={MakaylaTajalle} alt="Makayla Tajalle Headshot" loading="lazy" />
                  <h2>Makayla Tajalle</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/katherine-vona/">
              <div className="small_member_card">
                  <img src={KatieVona} alt="Katie Vona Headshot" loading="lazy" />
                  <h2>Katie Vona</h2>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/kylecyu/">
              <div className="small_member_card">
                  <img src={KyleYu} alt="Kyle Yu Headshot" loading="lazy" />
                  <h2>Kyle Yu</h2>
              </div>
          </a>

        </div>

        <h1>Alpha Class</h1>

        <div className="small-members-cards-container">
            <a href="https://www.linkedin.com/in/andrea-balaguer/">
                <div className="small_member_card">
                    <img src={AndreaBalaguer} alt="Andrea Balaguer Headshot" loading="lazy" />
                    <h2>Andrea Balaguer</h2>
                </div>
            </a>

            <a href="https://www.linkedin.com/in/thomasboles21/">
                <div className="small_member_card">
                    <img src={ThomasBoles} alt="Thomas Boles Headshot" loading="lazy" />
                    <h2>Thomas Boles</h2>
                </div>
            </a>

            <a href="https://www.linkedin.com/in/ryan-chase-84ab8a215/">
                <div className="small_member_card">
                    <img src={RyanChase} alt="Ryan Chase Headshot" loading="lazy" />
                    <h2>Ryan Chase</h2>
                </div>
            </a>

            <a href="https://www.linkedin.com/in/dichen09/">
                <div className="small_member_card">
                    <img src={DiChen} alt="Di Chen Headshot" loading="lazy" />
                    <h2>Di Chen</h2>
                </div>
            </a>

            <a href="https://www.linkedin.com/in/grace-dai-bu/">
                <div className="small_member_card">
                    <img src={GraceDai} alt="Grace Dai Headshot" loading="lazy" />
                    <h2>Grace Dai</h2>
                </div>
            </a>

            <a href="https://www.linkedin.com/in/eliott-dinfotan/">
                <div className="small_member_card">
                    <img src={EliottDinfotan} alt="Eliott Dinfotan Headshot" loading="lazy" />
                    <h2>Eliott Dinfotan</h2>
                </div>
            </a>

            <a href="https://www.linkedin.com/in/mferiancek/">
                <div className="small_member_card">
                    <img src={MatthewFerianeck} alt="Matthew Ferianeck Headshot" loading="lazy" />
                    <h2>Matthew Ferianeck</h2>
                </div>
            </a>

            <a href="https://www.linkedin.com/in/julia-flynn-564324212/">
                <div className="small_member_card">
                    <img src={JuliaFlynn} alt="Julia Flynn Headshot" loading="lazy" />
                    <h2>Julia Flynn</h2>
                </div>
            </a>

            <a href="https://www.linkedin.com/in/zach-gentile-b4b86726a/">
                <div className="small_member_card">
                    <img src={ZachGentile} alt="Zach Gentile Headshot" loading="lazy" />
                    <h2>Zach Gentile</h2>
                </div>
            </a>

            <a href="https://www.linkedin.com/in/ericgulottyjr/">
                <div className="small_member_card">
                    <img src={EricGulotty} alt="Eric Gulotty Headshot" loading="lazy" />
                    <h2>Eric Gulotty</h2>
                </div>
            </a>

            <a href="https://www.linkedin.com/in/juyoung-kim-091645267/">
                <div className="small_member_card">
                    <img src={EricKim} alt="Eric Kim Headshot" loading="lazy" />
                    <h2>Eric Kim</h2>
                </div>
            </a>

            <a href="https://www.linkedin.com/in/rohan-kumar-in/">
                <div className="small_member_card">
                    <img src={RohanKumar} alt="Rohan Kumar Headshot" loading="lazy" />
                    <h2>Rohan Kumar</h2>
                </div>
            </a>

            <a href="https://www.linkedin.com/in/dlaboy21/">
                <div className="small_member_card">
                    <img src={DerekLaboy} alt="Derek Laboy Headshot" loading="lazy" />
                    <h2>Derek Laboy</h2>
                </div>
            </a>

            <a href="https://www.linkedin.com/in/josh-leeds-a21232260/">
                <div className="small_member_card">
                    <img src={JoshLeeds} alt="Josh Leeds Headshot" loading="lazy" />
                    <h2>Josh Leeds</h2>
                </div>
            </a>

            <a href="https://www.linkedin.com/in/anniealiang/">
                <div className="small_member_card">
                    <img src={AnnieLiang} alt="Annie Liang Headshot" loading="lazy" />
                    <h2>Annie Liang</h2>
                </div>
            </a>

            <a href="https://www.linkedin.com/in/tim-mccorry-reynolds-2571b321a/">
                <div className="small_member_card">
                    <img src={TimMcCorry} alt="Tim McCorry Headshot" loading="lazy" />
                    <h2>Tim McCorry</h2>
                </div>
            </a>

            <a href="https://www.linkedin.com/in/madison-mcdonald-484929219/">
                <div className="small_member_card">
                    <img src={MadisonMcDonald} alt="Madison McDonald Headshot" loading="lazy" />
                    <h2>Madison McDonald</h2>
                </div>
            </a>

            <a href="https://www.linkedin.com/in/wyatt-napier/">
                <div className="small_member_card">
                    <img src={WyattNapier} alt="Wyatt Napier Headshot" loading="lazy" />
                    <h2>Wyatt Napier</h2>
                </div>
            </a>

            <a href="https://www.linkedin.com/in/samoffsey/">
                <div className="small_member_card">
                    <img src={SamOffsey} alt="Sam Offsey Headshot" loading="lazy" />
                    <h2>Sam Offsey</h2>
                </div>
            </a>

            <a href="https://www.linkedin.com/in/yana-pathak/">
                <div className="small_member_card">
                    <img src={YanaPathak} alt="Yana Pathak Headshot" loading="lazy" />
                    <h2>Yana Pathak</h2>
                </div>
            </a>

            <a href="https://www.linkedin.com/in/nathan-pike-196143256/">
                <div className="small_member_card">
                    <img src={NathanPike} alt="Nathan Pike Headshot" loading="lazy" />
                    <h2>Nathan Pike</h2>
                </div>
            </a>

            <a href="https://www.linkedin.com/in/beatrizp%C3%A9rez602/">
                <div className="small_member_card">
                    <img src={BeatrizPerez} alt="Beatriz Pérez Headshot" loading="lazy" />
                    <h2>Beatriz Pérez</h2>
                </div>
            </a>

            <a href="https://www.linkedin.com/in/carol-riady-2390b61b9/">
                <div className="small_member_card">
                    <img src={CarolRiady} alt="Carol Riady Headshot" loading="lazy" />
                    <h2>Carol Riady</h2>
                </div>
            </a>

            <a href="https://www.linkedin.com/in/griffin-tomko-82b17226b/">
                <div className="small_member_card">
                    <img src={GriffinTomko} alt="Griffin Tomko Headshot" loading="lazy" />
                    <h2>Griffin Tomko</h2>
                </div>
            </a>

            <a href="https://www.linkedin.com/in/victor-verma-91713022b/">
                <div className="small_member_card">
                    <img src={VictorVerma} alt="Victor Verma Headshot" loading="lazy" />
                    <h2>Victor Verma</h2>
                </div>
            </a>

            <a href="https://www.linkedin.com/in/sara-wishner-2a90a0241/">
                <div className="small_member_card">
                    <img src={SaraWishner} alt="Sara Wishner Headshot" loading="lazy" />
                    <h2>Sara Wishner</h2>
                </div>
            </a>

            <a href="https://www.linkedin.com/in/wongb4/">
                <div className="small_member_card">
                    <img src={BrandonWong} alt="Brandon Wong Headshot" loading="lazy" />
                    <h2>Brandon Wong</h2>
                </div>
            </a>

            <a href="https://www.linkedin.com/in/jenny-yang-ab2b6982/">
                <div className="small_member_card">
                    <img src={JennyYang} alt="Jenny Yang Headshot" loading="lazy" />
                    <h2>Jenny Yang</h2>
                </div>
            </a>

            <a href="https://www.linkedin.com/in/richard-yang-a9ba65261/">
                <div className="small_member_card">
                    <img src={RichardYang} alt="Richard Yang Headshot" loading="lazy" />
                    <h2>Richard Yang</h2>
                </div>
            </a>

            <a href="https://www.linkedin.com/in/tiffanyyyu/">
                <div className="small_member_card">
                    <img src={TiffanyYu} alt="Tiffany Yu Headshot" loading="lazy" />
                    <h2>Tiffany Yu</h2>
                </div>
            </a>

        </div> 

        <h1><span style={{ color: "#a3e4a3" }}>"</span> Founding Members</h1>

        <div className="small-members-cards-container">

            <a href="https://www.linkedin.com/in/paul-lee-55119725a/">
                <div className="small_member_card">
                    <img src={PaulLee} alt="Paul Lee Headshot" loading="lazy" />
                    <h2>Paul Lee</h2>
                </div>
            </a>

            <a href="https://www.linkedin.com/in/tye-robison-7a2aa9259/">
                <div className="small_member_card">
                    <img src={TyeRobison} alt="Tye Robison Headshot" loading="lazy" />
                    <h2>Tye Robison</h2>
                </div>
            </a>

            <a href="https://www.linkedin.com/in/evan-lapid-077478256/">
                <div className="small_member_card">
                    <img src={EvanLapid} alt="Evan Lapid Headshot" loading="lazy" />
                    <h2>Evan Lapid</h2>
                </div>
            </a>

            <a href="https://www.linkedin.com/in/jaden-hsiao-b72a7b24b/">
                <div className="small_member_card">
                    <img src={JadenHsiao} alt="Jaden Hsiao Headshot" loading="lazy" />
                    <h2>Jaden Hsiao</h2>
                </div>
            </a>

            <a href="https://www.linkedin.com/in/anissa-patel/">
                <div className="small_member_card">
                    <img src={AnissaPatel} alt="Anissa Patel Headshot" loading="lazy" />
                    <h2>Anissa Patel</h2>
                </div>
            </a>

            <a href="https://www.linkedin.com/in/pblej/">
                <div className="small_member_card">
                    <img src={PatrickBlejwas} alt="Patrick Blejwas Headshot" loading="lazy" />
                    <h2>Patrick Blejwas</h2>
                </div>
            </a>

            <a href="https://www.linkedin.com/in/peachy-malik-b46a42220/">
                <div className="small_member_card">
                    <img src={PeachyMalik} alt="Peachy Malik Headshot" loading="lazy" />
                    <h2>Peachy Malik</h2>
                </div>
            </a>

            <a href="https://www.linkedin.com/in/camille-kathleen-herzog/">
                <div className="small_member_card">
                    <img src={CamilleHerzog} alt="Camille Herzog Headshot" loading="lazy" />
                    <h2>Camille Herzog</h2>
                </div>
            </a>

            <a href="https://www.linkedin.com/in/george-audi-83182525a/">
                <div className="small_member_card">
                    <img src={GeorgeAudi} alt="George Audi Headshot" loading="lazy" />
                    <h2>George Audi</h2>
                </div>
            </a>

            <a href="https://www.linkedin.com/in/rylie-love-6b608224b/">
                <div className="small_member_card">
                    <img src={RylieLove} alt="Rylie Love Headshot" loading="lazy" />
                    <h2>Rylie Love<br/></h2>
                </div>
            </a>

        </div>
      </div>
    </div>
  );
}