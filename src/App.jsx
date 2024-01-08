import { Navbar } from "./Components/Navbar/Navbar";
import { Sidebar } from "./Components/Sidebar/Sidebar";

import styles from "./app.module.scss";

function App() {
    return (
        <section className={styles.app}>
            <Sidebar />
            <main className={styles.app_main}>
                <Navbar />
            </main>
        </section>
    );
}

export default App;
