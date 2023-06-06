import P from "@/components/UI/P";
import css from "./page.module.css";
const PortfolioHome = async () => {

 

  const data = [
    `저는 항상 발전하기 위해 노력하고`,
    `새로운 지식을 얻는 것을 즐기는 풀스택 웹 개발자입니다.`,
    `긍정적인 마음, 문제 해결을 즐기는 성격이 저의 장점입니다. `,
    `\u200B`,
    `카페인을 코드로 바꾸는 능력이 있는 희귀한 생명체.`
  ];

  return (
    <div className={css["introduce-myself"]}>
      <h2>
        안녕하세요.
      </h2>
      <div> 
        {data && 
          data.map((el, idx) => {
            return (                      
              <P key={idx} content={el} />
            )
          })
        }
      </div>
    </div>
  )
}

export default PortfolioHome;