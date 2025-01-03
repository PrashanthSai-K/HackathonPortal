import React from "react";
import Table from "../components/userFinalist/Table";
import Navbar from "../components/LandingPage/Navbar";

export default function UserFinalist() {
  return (
    <>
      <Navbar />
      <section className=" px-3 pt-24 home" id="">
        <div className=" text-center text-violet-900 text-xl font-semibold">
          FINALIST
        </div>
        <Table />
      </section>
    </>
  );
}
