import React from 'react';
import '../styles/Footer.css';
import check from '../drawable/checked.png';

function Footer() {
    return (
        <div className="containerFooter">
            <div className="trustSecurity">
                <img className="checkIcon" src={check} alt="checkIcon" />
                <p className="checkText">Доверие и Безопасность</p>
            </div>
            <ul className="listContainer">
                <li className="listItem">Qaiyrym - надежная платформа в сфере сбора средств.</li>
                <li className="listItem">Приложение не требует оплаты за публикацию и не взымает комиссию за пожертвование.</li>
                <li className="listItem">С целью избежания мошенничества, наша команда экспертов тщательно отбирает заявки и дает гарантию, что средства используются по назначению.</li>
            </ul>
        </div>
    );
}

export default Footer;