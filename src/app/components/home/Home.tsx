import React from "react";
import "../../styles/css";
import Typed from "react-typed";
export default function Home({ translations }:any) {

  return (
    <div id="home-container">
      <div className="home-presentation">
        <h3>{translations?.['home_greeting']}</h3>
        <div className="home-description">
          <p>{translations?.['home_presentation']} </p>
          <Typed
            className="home-typed-text"
            strings={translations?.['home_strings']}
            typeSpeed={40}
            loop
          />
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque,
          dolores enim adipisci a exercitationem aut. Totam veniam reprehenderit
          expedita iste id earum soluta molestias, neque mollitia itaque dolorum
          architecto? Modi.
        </p>

        {/* <Typed
                strings={[
                'Search for products',
                'Search for categories',
                'Search for brands']}
                typeSpeed={40}
                backSpeed={50}
                attr="placeholder"
                loop /> */}
      </div>
    </div>
  );
}
