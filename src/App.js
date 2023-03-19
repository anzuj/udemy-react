import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";
// import "./styles.css"
import "bulma/css/bulma.css";

export default function App() {
  return (
    <div>
        <section className="hero is-primary">
  <div className="hero-body">
    <p className="title">
    Personal assistants
    </p>
  </div>
</section>
     
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard image={AlexaImage} title="Alexa" handle="@alexa99" />
            </div>
            <div className="column is-4">
              <ProfileCard image={CortanaImage} title="Cortana" handle="@cortana32" />
            </div>
            <div className="column is-4">
              <ProfileCard image={SiriImage} title="Siri" handle="@siri01" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
