import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function Section2() {
  const [menuNumber, setMenuNumber] = useState(0);
  const [menuList, setMenuList] = useState(coffeeList.length);

  return (
    <div className="section section2">
      <Menu1
        menuNumber={menuNumber}
        setMenuNumber={setMenuNumber}
        menuList={menuList}
        setMenuList={setMenuList}
      />
    </div>
  );
}
function Menu1(props) {
  console.log(props);

  const { menuNumber, menuList, setMenuList, setMenuNumber } = props;

  const rendering = () => {
    const result = [];

    result.push(
      <div className="inner-box">
        <div className="menu_list">
          <div className="menu_list_header">
            <div className="title">메뉴</div>
            <div className="desc">에그 레시피의 메뉴를 만나보세요!</div>
            <div className="desc2">원하는 메뉴를 클릭해보세요.</div>
          </div>
          <div className="menu-pane">
            <div className="categori">
              <div className="Coffee sel">커피</div>
              <div className="Dessert">디저트</div>
            </div>
            <div className="desc coffeMenu">
              {menuNumber == null ? (
                <Menu
                  menuNumber={0}
                  setMenuNumber={setMenuNumber}
                  menuList={menuList}
                  setMenuList={setMenuList}
                />
              ) : (
                <Menu
                  menuNumber={menuNumber}
                  setMenuNumber={setMenuNumber}
                  menuList={menuList}
                  setMenuList={setMenuList}
                />
              )}
            </div>
          </div>
        </div>
        {MenuIntro == null ? (
          <MenuIntro
            initNumber={0}
            setMenuNumber={setMenuNumber}
            menuList={menuList}
            setMenuList={setMenuList}
          ></MenuIntro>
        ) : (
          <MenuIntro
            initNumber={menuNumber}
            setMenuNumber={setMenuNumber}
            menuList={menuList}
            setMenuList={setMenuList}
          ></MenuIntro>
        )}
      </div>
    );

    return result;
  };

  return <div className="desc">{rendering()}</div>;
}
function Menu(props) {
  const { menuNumber, setMenuNumber, menuList, setMenuList } = props;

  const handleMenu = (number) => {
    if (number >= coffeeList.length) {
      return;
    }

    setMenuNumber(number);

    if (document.querySelector(".col > .sel") != null)
      document.querySelector(".col > .sel").classList.remove("sel");
    document.querySelector(".menu" + number).classList.add("sel");
  };

  const rendering = () => {
    const result = [];

    for (let i = 0; i < 3; i += 3) {
      result.push(
        <div className="col" key={i}>
          <div className={`menu menu${i} sel`} onClick={() => handleMenu(i)}>
            {coffeeList[i]?.name}
          </div>
          <div
            className={`menu menu${i + 1}`}
            onClick={() => handleMenu(i + 1)}
          >
            {coffeeList[i + 1]?.name}
          </div>
          <div
            className={`menu menu${i + 2}`}
            onClick={() => handleMenu(i + 2)}
          >
            {coffeeList[i + 2]?.name}
          </div>
        </div>
      );
    }

    for (let i = 3; i < coffeeList.length; i += 3) {
      result.push(
        <div className="col" key={i}>
          <div className={`menu menu${i}`} onClick={() => handleMenu(i)}>
            {coffeeList[i]?.name}
          </div>
          <div
            className={`menu menu${i + 1}`}
            onClick={() => handleMenu(i + 1)}
          >
            {coffeeList[i + 1]?.name}
          </div>
          <div
            className={`menu menu${i + 2}`}
            onClick={() => handleMenu(i + 2)}
          >
            {coffeeList[i + 2]?.name}
          </div>
        </div>
      );
    }

    return result;
  };

  return <div className="desc">{rendering()}</div>;
}

function MenuIntro(props) {
  console.log(MenuIntro);
  console.log(props);

  const [number, setNumber] = useState(props.initNumber);
  const { menuNumber, setMenuNumber, menuList, setMenuList } = props;

  const deleteMenu2 = (number) => {
    coffeeList.splice(number, 1);
    setMenuList(number - 1);

    setMenuNumber(number);

    if (document.querySelector(".col > .sel") != null)
      document.querySelector(".col > .sel").classList.remove("sel");
    document.querySelector(".menu" + number).classList.add("sel");
  };

  useEffect(() => {
    setNumber(props.initNumber);
  }, [props.initNumber]);

  return (
    <div className="menu_intro">
      <div className="menu-image"></div>
      <div className="menu-desc">
        <div className="nameEng">{coffeeList[number]?.nameEng}</div>
        <div className="nameKor">
          {coffeeList[number]?.name}
          <span className="price">{coffeeList[number]?.price}원</span>
        </div>
        <div className="desc">{coffeeList[number]?.desc}</div>
        <div className="delBtn" onClick={() => deleteMenu2(number)}>
          삭제하기
        </div>
      </div>
    </div>
  );
}
MenuIntro.propTypes = {
  initNumber: PropTypes.number.isRequired,
};

Menu1.propTypes = {
  menuNumber: PropTypes.number,
  initNumber: PropTypes.number,
  number: PropTypes.number,
  menuList: PropTypes.number,
};

Menu.propTypes = {
  menuNumber: PropTypes.number,
  menuList: PropTypes.number,
};

Section2.prototype = {
  menuList: PropTypes.number,
};

let coffeeList = [
  {
    name: "아메리카노",
    nameEng: "Americano",
    price: 1500,
    desc: "에스프레소에 뜨거운 물을 추가하여 풍부하고 강인한 풍미를 가진 클래식한 커피입니다.",
  },
  {
    name: "루이보스",
    nameEng: "Rooibos",
    price: 1200,
    desc: "남아프리카의 루이보스 식물 잎으로 만든 무카페인 차로, 흙맛과 달콤한 맛이 특징입니다.",
  },
  {
    name: "딸기라떼",
    nameEng: "Strawberry Latte",
    price: 1800,
    desc: "딸기의 달콤하고 과일 특유의 향을 더한 크리미하고 상쾌한 라떼 음료입니다.",
  },
  {
    name: "헤이즐넛 아메리카노",
    nameEng: "Hazelnut Americano",
    price: 1700,
    desc: "에스프레소에 헤이즐넛 향을 더해 부드럽고 고소한 맛을 즐길 수 있는 아메리카노입니다.",
  },
  {
    name: "페퍼민트",
    nameEng: "Peppermint",
    price: 1400,
    desc: "향긋한 페퍼민트로 만든 차로, 상쾌하면서도 청량한 맛이 특징입니다.",
  },
  {
    name: "초콜릿라떼",
    nameEng: "Chocolate Latte",
    price: 1600,
    desc: "진한 초콜릿과 부드러운 우유를 조화롭게 블렌딩하여 만든 달콤한 라떼 음료입니다.",
  },
  {
    name: "카페라떼",
    nameEng: "Cafe Latte",
    price: 1500,
    desc: "에스프레소와 우유를 조합한 부드러운 크림이 특징인 커피 라떼입니다.",
  },
  {
    name: "얼그레이",
    nameEng: "Earl Grey",
    price: 1300,
    desc: "베르가모트 오일이 첨가된 블랙 티로, 상쾌한 시트러스 향이 특징인 차입니다.",
  },
  {
    name: "카라멜 마끼아또",
    nameEng: "Caramel Macchiato",
    price: 1700,
    desc: "에스프레소에 부드러운 카라멜과 우유 거품을 더해 달콤하고 부드러운 커피 음료입니다.",
  },
  {
    name: "바닐라라떼",
    nameEng: "Vanilla Latte",
    price: 1600,
    desc: "바닐라 향이 가미된 우유와 에스프레소를 조화롭게 블렌딩한 달콤한 라떼 음료입니다.",
  },
  {
    name: "잉그리쉬 블랙퍼스트",
    nameEng: "English Breakfast",
    price: 1400,
    desc: "강하고 풍부한 향의 블랙 티로, 아침 식사와 잘 어울리는 차입니다.",
  },
  {
    name: "유자차",
    nameEng: "Yuja Tea",
    price: 1200,
    desc: "유자의 상큼한 향과 고소한 맛을 즐길 수 있는 차 음료입니다.",
  },
  {
    name: "카페모카",
    nameEng: "Cafe Mocha",
    price: 1600,
    desc: "에스프레소, 초콜릿, 우유가 어우러진 달콤하고 풍부한 커피 음료입니다.",
  },
  {
    name: "히비스커스",
    nameEng: "Hibiscus",
    price: 1400,
    desc: "히비스커스 꽃잎으로 만든 차로, 상큼하고 과일 향이 느껴지는 차입니다.",
  },
  {
    name: "레몬에이드",
    nameEng: "Lemonade",
    price: 1500,
    desc: "신선한 레몬과 달콤한 시럽을 섞어 만든 상큼한 레모네이드 음료입니다.",
  },
  {
    name: "연유라떼",
    nameEng: "Condensed Milk Latte",
    price: 1700,
    desc: "진한 연유의 달콤함과 우유가 어우러진 달콤한 라떼 음료입니다.",
  },
  {
    name: "아이스트",
    nameEng: "Iced Americano",
    price: 1300,
    desc: "얼음을 넣어 시원하게 즐기는 에스프레소 베이스의 아메리카노입니다.",
  },
  {
    name: "퍼플에이드",
    nameEng: "Purple Ade",
    price: 1600,
    desc: "자색 과일의 특유한 향과 상큼함이 느껴지는 청량음료입니다.",
  },
  {
    name: "흑당라떼",
    nameEng: "Brown Sugar Latte",
    price: 1700,
    desc: "흑당 시럽이 가미된 달콤하고 부드러운 우유와 에스프레소가 어우러진 라떼 음료입니다.",
  },
  {
    name: "리얼 복숭아티",
    nameEng: "Real Peach Tea",
    price: 1800,
    desc: "진짜 복숭아의 향과 맛을 담은 차로, 상큼하고 달콤한 맛이 특징인 차 음료입니다.",
  },
  {
    name: "체리에이드",
    nameEng: "Cherry Ade",
    price: 1500,
    desc: "체리의 달콤함과 상큼한 레모네이드가 어우러진 상쾌한 음료입니다.",
  },
  {
    name: "카페 바이올렛",
    nameEng: "Cafe Violet",
    price: 1600,
    desc: "바이올렛 향이 가미된 우유와 에스프레소가 어우러진 특별한 라떼 음료입니다.",
  },
  {
    name: "밀크티",
    nameEng: "Milk Tea",
    price: 1400,
    desc: "홍차 베이스에 우유를 더해 부드럽고 고소한 맛이 특징인 차 음료입니다.",
  },
  {
    name: "자몽에이드",
    nameEng: "Grapefruit Ade",
    price: 1500,
    desc: "상큼한 자몽과 청량한 레모네이드가 어우러진 상쾌한 음료입니다.",
  },
  {
    name: "에스프레소",
    nameEng: "Espresso",
    price: 1200,
    desc: "고농축된 커피로 진한 풍미를 즐길 수 있는 짧고 강렬한 음료입니다.",
  },
  {
    name: "캐모마일 릴렉서",
    nameEng: "Chamomile Relaxer",
    price: 1300,
    desc: "캐모마일 꽃으로 만든 차로, 편안하고 차분한 릴렉싱한 향이 특징인 차 음료입니다.",
  },
  {
    name: "딸기에이드",
    nameEng: "Strawberry Ade",
    price: 1500,
    desc: "딸기의 달콤하고 상큼한 맛이 느껴지는 상쾌한 에이드 음료입니다.",
  },
  {
    name: "녹차라떼",
    nameEng: "Green Tea Latte",
    price: 1600,
    desc: "녹차의 쌉싸름한 맛과 부드러운 우유가 어우러진 달콤한 라떼 음료입니다.",
  },
  {
    name: "자몽허니블랙티",
    nameEng: "Grapefruit Honey Black Tea",
    price: 1700,
    desc: "자몽과 꿀이 가미된 블랙 티로, 고소하고 상큼한 맛이 특징인 차 음료입니다.",
  },
  {
    name: "캐모마일",
    nameEng: "Chamomile",
    price: 1200,
    desc: "캐모마일 꽃으로 만든 차로, 편안하고 차분한 향이 특징인 차 음료입니다.",
  },
];
export default Section2;
