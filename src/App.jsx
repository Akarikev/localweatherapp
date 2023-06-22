import Api from "./Api";
import "./App.css";
import LocationComponent from "./LocationComponent";
import { SlSocialGithub } from "react-icons/sl";
import { RiTwitterLine } from "react-icons/ri";
import { TiWeatherWindyCloudy } from "react-icons/ti";
function App() {
  return (
    <div>
      <h1>
        <span>CAPE</span>WEATHER
      </h1>
      <TiWeatherWindyCloudy
        size={60}
        style={{ marginTop: -30, marginBottom: 10 }}
        className="logo react"
      />
      <Api />
      <LocationComponent />

      <div>
        <footer>By Akarikev 👋</footer>

        <div className="footer_items">
          <a
            href="https://github.com/Akarikev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SlSocialGithub size={28} title="my github" aria-hidden={true} />
          </a>

          <a
            href="http://www.twitter.com/elorm_elom"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiTwitterLine aria-hidden={true} size={28} title="tweet here" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
