import { CompanyIconAndImage } from "../CompanyIconAndImage/CompanyIconAndImage";

import CompanyLogo from "../../assets/logos/companyLogo.png";

import styles from "./sidebar.module.scss";

export const Sidebar = () => {
    return (
        <section className={styles.section}>
            <div className={styles.company_name_logo}>
                <CompanyIconAndImage name="Nishyan" imgSrc={CompanyLogo} />
            </div>
            <div className={styles.pages_container}></div>
        </section>
    );
};
