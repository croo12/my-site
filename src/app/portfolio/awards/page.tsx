import Feed from "@/components/Portfolio/Awards/Feed";
import Toggle from "@/components/UI/Toggle";

const education = [
  {
    title: "SSAFY 8기 수료",
    description: "Certificate 최우수 (상위 5%)",
    date: "2022.07 ~ 2023.06.16"
  },
  {
    title: "JSL인재개발원 수료",
    description: "글로벌 ICT 전문가 양성과정 Track II",
    date: "2022.05"
  },
  {
    title: "JSL인재개발원 입소",
    description: "글로벌 ICT 전문가 양성과정 Track II",
    date: "2021.07"
  },
  {
    title: "충남대학교 졸업",
    description: "가까스로 졸업",
    date: "2020.02"
  },
]

const achieve = [
  {
    title: "성적 우수상 수상",
    description: "SSAFY - 대표이사 상 우수상",
    date: "2023.06.16"
  },
  {
    title: "자율프로젝트 우수 프로젝트 - 3등",
    description: "SSAFY - 우아한 우리 아이 한글교육 어플리케이션",
    date: "2023.05.25"
  },
  {
    title: "삼성 SW 역량테스트 B형 취득",
    description: "Level B 취득",
    date: "2023.05.17"
  },
  {
    title: "특화프로젝트 최우수 프로젝트 - 1등",
    description: "SSAFY - Cookscape 술래잡기 게임",
    date: "2023.04.18"
  },
  {
    title: "공통프로젝트 최우수 프로젝트 - 1등",
    description: "SSAFY - Live 원터치 부동산 프로젝트",
    date: "2023.02.27"
  },
  {
    title: "과정평가형 정보처리 산업기사 취득",
    description: "(과정평가형)정보처리 산업기사",
    date: "2022.05.26"
  },
  {
    title: "컴퓨터 활용능력 1급 취득",
    description: "필기 / 실기",
    date: "2021.02"
  },
]

// const achievment

const AwardsPage = () => {
  return (
    <div>
      <Toggle title="Achievement">
        {
          achieve.map((el, idx) => {
            return <Feed {...el} key={idx} />
          })
        }
      </Toggle>
      <Toggle title="Experience">
        {
          education.map((el, idx) => {
            return <Feed {...el} key={idx} />
          })
        }
      </Toggle>
    </div>
  )
}

export default AwardsPage;