import React from "react";
import MainHeader from "../../components/MainHeader";
import Welcome from "../../components/Welcome";
import "./styles.scss";

export default function Home() {
  return (
    <div id="container-home">
      <MainHeader />
      <Welcome />
    </div>
  );
}
