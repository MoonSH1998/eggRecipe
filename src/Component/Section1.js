import React, { useState, useEffect } from "react";

function Section1() {
  return (
    <div className="section section1">
      <div className="inner-box img0">
        <div className="arrow">
          <div className="arrow_left" onclick="arrowBtn(1)"></div>
          <div className="arrow_right" onclick="arrowBtn(2)"></div>
        </div>
        <div className="text">
          <div>좋은 재료로 만드는 디저트 카페</div>
          <div>Egg Recipe</div>
          <div>
            달콤한 디저트는 당신의 하루를 달콤하게 만듭니다. <br />
            달콤한 하루가 되도록 정성을 다하겠습니다.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
