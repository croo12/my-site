import LinkButton from "../UI/LinkButton";
import css from "./PortfolioHeader.module.css";

const PortfolioHeader = () => {

  const navData = [
    {
      url: "/portfolio",
      title: "INTRODUCE"
    },
    {
      url: "/portfolio/projects",
      title: "PROJECTS"
    },
    {
      url: "/portfolio/awards",
      title: "EXPERIENCE/AWARDS"
    }
  ]

  return (
    <header className={`${css[`portfolio-header`]} background-effect`} id="top">
      <div>
        <div className={css["top-bar"]}>
          <div className={css.title}>
            <h1>
              <span className="cursor-effect">Portfolio</span>
            </h1>
            <h1>이지우</h1>
          </div>

          <div className={'flex items-start'} id={"links"}>
            {/* {
              navData.map((el, idx) => {
                return (
                  <LinkButton {...el} key={idx} />
                )
              })
            } */}
          </div>
        </div>
        <hr className={`hr-line`} />
      </div>

      <nav className={css["portfolio-nav"]}>
        {
          navData.map((el, idx) => {
            return (
              <LinkButton {...el} key={idx} />
            )
          })
        }
      </nav>
    </header>
  )
}

export default PortfolioHeader;