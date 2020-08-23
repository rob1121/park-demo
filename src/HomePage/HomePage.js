import React from "react";
import "./HomePage.style.scss";
import LinkModal from "../common/LinkModal";

const HomePage = () => (
  <div className="home-page-container">
    <h1>Robinson Legaspi</h1>
    <small>
      Frontend Engineer
      <p>
        <a href="mailto:robinson.legaspi@yahoo.com">
          robinson.legaspi@yahoo.com
        </a>
      </p>
    </small>
    <LinkModal
      className="parking-link"
      pathname="/park"
      title="Goto parking page"
      noState
      type="button"
    />
  </div>
);

export default HomePage;
