import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function Section4() {
  return (
    <div className="section section4">
      <div className="inner-box">
        <div className="inquire-box">
          <div className="desc">Questions</div>
          <div className="desc2">
            에그 레시피에 대해 궁금하신 사항이 있으신가요?
          </div>
          <div className="input-box">
            <div className="left">
              <div className="input1">
                <div className="desc">제목</div>
                <input className="inputbox"></input>
              </div>
              <div className="input2">
                <div className="desc">이메일</div>
                <input className="inputbox"></input>
              </div>
            </div>
            <div className="right">
              <div className="input3">
                <div className="desc">내용</div>
                <input className="inputbox"></input>
              </div>
            </div>
          </div>
          <div className="sendBtn">
            <div>보내기</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
