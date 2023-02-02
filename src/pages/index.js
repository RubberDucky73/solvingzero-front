/** @format */

import Head from "next/head";
import QuickEnergySearch from "../components/QuickEnergySearch";
import styles from "../styles/Home.module.css";
import styles1 from "../styles/QuickEnergySearch.module.css"

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Solving Zero: Affordable green electricity is possible</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Save money and the planet by choosing an affordable and green energy provider, we analyse 20,000 energy plans so you don't have to" />
        <meta property="og:title" content="Solving Zero for cheaper greener energy to your home" />
        <meta property="og:site_name" content="Solving Zero" />
        <meta name="twitter:image:alt" content="Solving Zero Logo" />
        <meta property="og:image" content="/solving_zero_social.png" />
        <link rel="icon" href="/SZ_favicon.webp" />
      </Head>
      <main className={styles.main}>
        <br />
          <QuickEnergySearch />
        <br />
      </main>
    </div>
  );
}
