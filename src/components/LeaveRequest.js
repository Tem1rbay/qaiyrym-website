import React from 'react';
import '../styles/LeaveRequest.css';
import arrow1 from '../drawable/arrows/arrow1.png';
import arrow2 from '../drawable/arrows/arrow2.png';

function LeaveRequest() {
    return (
        <div className="containerRequest">

            <h1 style={{ marginTop: 10, fontSize: 35 }}>Как подать заявку?</h1>

            <div className="stepsContainer">

                <div>
                    <div className="stepItem">
                        <div className="itemBox">
                            <p style={{ fontSize: 23 }}>1</p>
                        </div>
                        <p className="itemText"> <b>Заполнение анкеты</b> расписав о своей ситуации</p>
                    </div>

                    <div className="stepItem">
                        <img className="arrows" src={arrow1} alt="arrow1" style={{ marginLeft: 17 }} />
                        <div className="itemBox" style={{ marginLeft: 15, marginTop: 58 }}>
                            <p style={{ fontSize: 23 }}> 2 </p>
                        </div>
                        <p className="itemText" style={{ marginTop: 64 }}>В течении 24 часов будет выслано <b>подтверждение заявки</b></p>
                    </div>
                </div>

                <img className="arrows" src={arrow2} alt="arrow2" style={{ width: 74.5, height: 85.15, marginTop: 30 }} />

                <div style={{ marginLeft: 15 }}>
                    <div className="stepItem">
                        <div className="itemBox">
                            <p style={{ fontSize: 23 }}>3</p>
                        </div>
                        <p className="itemText"> Предоставление <b>подробной информации</b> о заявителе</p>
                    </div>

                    <div className="stepItem">
                        <img className="arrows" src={arrow1} alt="arrow1" style={{ marginLeft: 17 }} />
                        <div className="itemBox" style={{ marginLeft: 15, marginTop: 58 }}>
                            <p style={{ fontSize: 23 }}> 4 </p>
                        </div>
                        <p className="itemText" style={{ marginTop: 64 }}>В течении 48 часов будет <b>опубликована заявка</b> в Qaiyrym</p>
                    </div>
                </div>
            </div>
            <button className="requestLeaveButton" onClick={() => console.log("Leave Request Button clicked")}>
                Оставить заявку
            </button>
        </div>
    );
}

export default LeaveRequest; 