import styles from "../../styles/ComparePlans.module.css";
import QuickEnergySearch from "../../components/QuickEnergySearch";
import RetailerList from "../../components/RetailerList";

function ComparePlans() {
    return (
        <>
            <div className={styles.container}>
                <h2>Green Energy Guide Below</h2>
            </div>
            <main className={styles.main}>
                <br />
                <QuickEnergySearch />
                <br />
                <RetailerList />
            </main>
        </>
    );
}

export default ComparePlans;