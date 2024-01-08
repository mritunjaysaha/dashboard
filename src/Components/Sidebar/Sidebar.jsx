import { CompanyIconAndImage } from "../CompanyIconAndImage/CompanyIconAndImage";

import CompanyLogo from "../../assets/logos/companyLogo.png";

import { SideNavPages } from "../../utils/SideNavPages";
import { SidebarNavButton } from "../SidebarNavButton/SidebarNavButton";
import styles from "./sidebar.module.scss";

export const Sidebar = () => {
    return (
        <section className={styles.section}>
            <div className={styles.company_name_logo}>
                <CompanyIconAndImage name="Nishyan" imgSrc={CompanyLogo} />
            </div>
            <div className={styles.pages_container}>
                {SideNavPages.map((data, index) => {
                    return (
                        <SidebarNavButton
                            key={index}
                            icon={data.icon}
                            name={data.name}
                        />
                    );
                })}
            </div>
        </section>
    );
};
