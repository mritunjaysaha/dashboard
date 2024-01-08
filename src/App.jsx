import { Navbar } from "./Components/Navbar/Navbar";
import { Overview } from "./Components/Overview/Overview";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { Transactions } from "./Components/Transactions/Transactions";

import styles from "./app.module.scss";

function App() {
    return (
        <section className={styles.app}>
            <Sidebar />
            <main className={styles.app_main}>
                <Navbar />
                <section className={styles.app_main_section}>
                    <Overview />
                    <Transactions />
                </section>
            </main>
        </section>
    );
}

export default App;
