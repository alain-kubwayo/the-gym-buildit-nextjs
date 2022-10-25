import Head from "next/head";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Header>
        <Navbar />
      </Header>
    </div>
  );
}
