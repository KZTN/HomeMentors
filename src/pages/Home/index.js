import React from "react";
import MainHeader from "../../components/MainHeader";
import Welcome from "../../components/Welcome";
import Success from "../../components/Success";

import Connections from "../../components/Connections";
import "./styles.scss";

export default function Home() {
  return (
    <div id="container-home">
      <MainHeader />
      <Welcome />
      <Success/>
      <Connections/>
    </div>
  );
}
