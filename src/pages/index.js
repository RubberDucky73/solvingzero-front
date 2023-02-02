/** @format */

import Head from "next/head";
import QuickEnergySearch from "../components/QuickEnergySearch";
import styles from "../styles/Home.module.css";


export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>SolvingZero</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h2>Search Tool</h2>
        <br />
        <QuickEnergySearch />
        <br />
        {/* <RetailerList /> */}
        <br />
        {/* <RetailerPricing /> */}
      </main>
    </div>
  );
}