import React from "react";
import styles from './PersonDetail.scss';
import logo from './img/user.png';



const PersonDetail = ({person}) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
               <div className={styles.photo}>
                   <img className={styles.logo} src={logo}/>
                </div>
                <div className={styles.fio}>{`${person.last_name} ${person.first_name} ${person.second_name}`}</div>
            </div>
            <div className={styles.main}>
                <div className={styles.title}>
                   <div className={styles.lable}> Дата рождения </div> 
                   <span className={styles.text}>{`${person.birth_date}`}</span>
                </div>
                <div className={styles.title}>
                   <div className={styles.lable}> Номер ИНН </div>
                   <span className={styles.text}>{`${person.tax_id}`}</span>
                </div>
                <div className={styles.title}>
                   <div className={styles.lable}> СНИЛС </div>
                   <span className={styles.text}>{`${person.insurance_number}`}</span>
                </div>
                <div className={styles.title}>
                   <div className={styles.lable}> Пол </div>
                   <span className={styles.text}>{`${person.gender}`}</span>
                </div>
            </div>

        </div>
    );
};

export default PersonDetail;