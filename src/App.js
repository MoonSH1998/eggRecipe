import React, { useState } from "react";
import PropTypes from "prop-types";
import "./css/app.css";

export default function App() {
  return (
    <div>
      <Header></Header>
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
    </div>
  );
}

function Header() {
  // const [number, setNumber] = useState(initNumber);
  //const [_date, setDate] = useState((new Date()).toString());

  return (
    <div className="header">
      <div className="main_header">
        <div className="logo"></div>
      </div>

      <div className="menu">
        <div onclick="go('section1')">Introduce</div>
        <div onclick="go('section2')">Menu</div>
        <div onclick="go('section3')">Contact</div>
        <div onclick="go('section4')">Map</div>
      </div>
    </div>
  );
}

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

function Section2() {
  return (
    <div className="section section2">
      <div className="inner-box">
        <div className="menu_list">
          <div className="menu_list_header">
            <div className="title">Menu</div>
            <div className="desc">에그 레시피의메뉴를 만나보세요!</div>
            <div className="desc2">원하는 메뉴를 클릭해보세요.</div>
          </div>
          <div className="menu-pane">
            <div className="categori">
              <div className="Coffee sel">Coffee</div>
              <div className="Dessert">Dessert</div>
            </div>
            <div className="desc coffeMenu">
              <Menu></Menu>
            </div>
          </div>
        </div>

        <div className="menu_intro">
          <div className="menu-image"></div>
        </div>
      </div>
    </div>
  );
}

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
    // <div className="container">
    //   <h2>function style component</h2>
    //   <p>Number: {number}</p>
    //   <p>Date: {_date}</p>
    //   <input type="button" value="random" onClick={() => setNumber(Math.random())}></input>
    //   <input type="button" value="date" onClick={() => setDate((new Date()).toString())}></input>
    // </div>
  );
}

function Section4() {
  // const [number, setNumber] = useState(menuNumber);
  //const [_date, setDate] = useState((new Date()).toString());

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
class Menu extends React.Component {
  state = {
    number: this.props.menuNumber,
  };

  handleMenu(menuNumber) {
    console.log(menuNumber);
    this.setState({ number: menuNumber });
    if (document.querySelector(".col > .sel") != null)
      document.querySelector(".col > .sel").classList.remove("sel");
    document.querySelector(".menu" + menuNumber).classList.add("sel");
  }

  render() {
    let coffeList = [
      "아메리카노",
      "루이보스",
      "딸기라떼",
      "헤이즐넛 아메리카노",
      "페퍼민트",
      "초콜릿라떼",
      "카페라떼",
      "얼그레이",
      "카라멜 마끼아또",
      "바닐라라떼",
      "잉그리쉬 블랙퍼스트",
      "유자차",
      "카페모카",
      "히비스커스",
      "레몬에이드",
      "연유라떼",
      "아이스트",
      "퍼플에이드",
      "흑당라떼",
      "리얼 복숭아티",
      "체리에이드",
      "카페 바이올렛",
      "밀크티",
      "자몽에이드",
      "에스프레소",
      "캐모마일 릴렉서",
      "딸기에이드",
      "녹차라떼",
      "자몽허니블랙티",
      "캐모마일",
    ];

    const rendering = () => {
      const result = [];
      for (let i = 0; i < 30; i += 3) {
        result.push(
          <div className="col">
            <div
              className={"munu" + " menu" + i}
              onClick={() => this.handleMenu(i)}
            >
              {coffeList[i]}
            </div>
            <div
              className={"munu" + " menu" + (i + 1)}
              onClick={() => this.handleMenu(i + 1)}
            >
              {coffeList[i + 1]}
            </div>
            <div
              className={"munu" + " menu" + (i + 2)}
              onClick={() => this.handleMenu(i + 2)}
            >
              {coffeList[i + 2]}
            </div>
          </div>
        );
      }

      return result;
    };

    return <div className="container">{rendering()}</div>;
  }
}
Menu.propTypes = {
  menuNumber: PropTypes.number,
};
