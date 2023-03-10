import Head from "next/head";
import { Inter } from "@next/font/google";
import Homepage from "../components/home/Homepage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Photography Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Homepage
        heading="Capture Photography"
        message="I capture moments in nature and keep them alive."
      />
    </>
  );
}
