import React, { useState, useEffect } from "react";

function Section3() {
  return (
    <div className="section section3">
      <div className="inner-box">
        <div className="contactDiv">
          <div className="desc1">Contact Us</div>
          <div className="desc2">
            에그 레시피의 소식을 <br />
            제일 먼저 확인해보세요!
          </div>
          <div className="desc3">
            문의사항들은 편하게, 저희의 소식들은 빠르게 확인해보세요!
          </div>
        </div>
        <div className="social-pane">
          <div className="social social1">
            <div className="img"></div>
            <div className="desc">네이버 지도</div>
          </div>
          <div className="social social2">
            <div className="img"></div>
            <div className="desc">인스타그램</div>
          </div>
          <div className="social social3">
            <div className="img"></div>
            <div className="desc">eggRecipe@naver.com</div>
          </div>
          <div className="social social4">
            <div className="img"></div>
            <div className="desc">010-4415-8880</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Section3;
