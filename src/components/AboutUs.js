import React from 'react';
import '../styles/AboutUs.css';
import { BsTelegram } from "react-icons/bs"

const AboutUs = () => {
    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}>
            <div>
                <div className="containerAboutUs">
                    <h1><b>О НАС</b></h1>
                    <p>Qaiyrym — это альтернативный метод по сбору средств, необходимых для дорогостоящего лечения.</p>
                    <h2>НАША ЗАДАЧА</h2>
                    <p style={{ paddingTop: 15 }}>Использовать возможности технологии для оказания крупномасштабного социального воздействия.</p>
                    <h2>НАША ЦЕЛЬ</h2>
                    <p style={{ paddingTop: 15 }}>Достичь 1000 успешных сборов средств, сделав дорогостоящее лечение более доступным для всех.</p>
                </div>
                <div>
                    <h1 className="teamHeader">Команда </h1>
                    <p className="slogan">Никто не может изменить мир в одиночку, и именно поэтому у нас в Qaiyrym замечательная команда. Все мы работаем вместе, чтобы раскрыть возможности краудфандинга и обеспечить лучшее будущее.</p>
                    <div className="ourTeam">
                        <div>
                            <img className="portfolio" src={require('../drawable/photo1.jpeg')} />
                            <p style={{ marginTop: 10, fontFamily: 'Montserrat', fontWeight: 700 }}><b>Нурхан Исин</b></p>
                            <h6>
                                <span style={{ fontSize: 16, fontFamily: 'Montserrat', fontWeight: 100 }}>Основатель, Бизнес-менеджер</span>
                                <br />
                                <a href="https://www.t.me/pyread"
                                    style={{ fontSize: 14, fontFamily: 'Montserrat', fontWeight: 100, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <BsTelegram style={{ marginRight: 5, fontSize: 20 }} />t.me/pyread</a>
                            </h6>
                        </div>
                        <div>
                            <img className="portfolio" src={require('../drawable/photo2.jpg')} />
                            <p style={{ marginTop: 10, fontFamily: 'Montserrat', fontWeight: 700 }}><b>Асанали Айдархан</b></p>
                            <h6>
                                <span style={{ fontSize: 16, fontFamily: 'Montserrat', fontWeight: 100 }}>Основатель, Web-разработчик</span>
                                <br />
                                <a href="https://www.t.me/assanali818"
                                    style={{ fontSize: 14, fontFamily: 'Montserrat', fontWeight: 100, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <BsTelegram style={{ marginRight: 5, fontSize: 20 }} />t.me/assanali818</a>
                            </h6>
                        </div>
                        <div>
                            <img className="portfolio" src={require('../drawable/photo3.jpeg')} />
                            <p style={{ marginTop: 10, fontFamily: 'Montserrat', fontWeight: 700 }}><b>Азамат Саламат</b></p>
                            <h6>
                                <span style={{ fontSize: 16, fontFamily: 'Montserrat', fontWeight: 100 }}>BackEnd-разработчик</span>
                                <br />
                                <a href="https://www.t.me/AzamatSalamat"
                                    style={{ fontSize: 14, fontFamily: 'Montserrat', fontWeight: 100, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <BsTelegram style={{ marginRight: 5, fontSize: 20 }} />t.me/AzamatSalamat</a>
                            </h6>
                        </div>
                        <div>
                            <img className="portfolio" src={require('../drawable/photo4.jpeg')} />
                            <p style={{ marginTop: 10, fontFamily: 'Montserrat', fontWeight: 700 }}><b>Ильяс Темирбаев</b></p>
                            <h6>
                                <span style={{ fontSize: 16, fontFamily: 'Montserrat', fontWeight: 100 }}>FrontEnd-разработчик</span>
                                <br />
                                <a href="https://www.t.me/tIlyas"
                                    style={{ fontSize: 14, fontFamily: 'Montserrat', fontWeight: 100, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <BsTelegram style={{ marginRight: 5, fontSize: 20 }} />t.me/tIlyas</a>
                            </h6>
                        </div>
                        <div>
                            <img className="portfolio" src={require('../drawable/photo4.jpeg')} />
                            <p style={{ marginTop: 10, fontFamily: 'Montserrat', fontWeight: 700 }}><b>Ильяс Темирбаев</b></p>
                            <h6>
                                <span style={{ fontSize: 16, fontFamily: 'Montserrat', fontWeight: 100 }}>FrontEnd-разработчик</span>
                                <br />
                                <a href="https://www.t.me/tIlyas"
                                    style={{ fontSize: 14, fontFamily: 'Montserrat', fontWeight: 100, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <BsTelegram style={{ marginRight: 5, fontSize: 20 }} />t.me/tIlyas</a>
                            </h6>
                        </div>
                        <div>
                            <img className="portfolio" src={require('../drawable/photo4.jpeg')} />
                            <p style={{ marginTop: 10, fontFamily: 'Montserrat', fontWeight: 700 }}><b>Ильяс Темирбаев</b></p>
                            <h6>
                                <span style={{ fontSize: 16, fontFamily: 'Montserrat', fontWeight: 100 }}>FrontEnd-разработчик</span>
                                <br />
                                <a href="https://www.t.me/tIlyas"
                                    style={{ fontSize: 14, fontFamily: 'Montserrat', fontWeight: 100, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <BsTelegram style={{ marginRight: 5, fontSize: 20 }} />t.me/tIlyas</a>
                            </h6>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
}

export default AboutUs;