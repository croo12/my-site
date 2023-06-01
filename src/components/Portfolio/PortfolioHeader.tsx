import css from "./PortfolioHeader.module.css";

const PortfolioHeader = () => {
  return (
    <header className={css[`portfolio-header`]} id="top">
      <div>
        <div className={css["top-bar"]}>
          <div className={css.title}>
            <h1>
              <span className="cursor-effect">Portfolio</span>
            </h1>
            <h1>이지우</h1>
          </div>

          <div className={'flex items-start'} id={"links"}>
            {
              // HeaderIconsData.map((el, idx) => {
              //   return (
              //     <IconWithLink {...el} key={idx} />
              //   )
              // })
            }
          </div>
        </div>
        <hr className={css[`divide-line`]} />
      </div>

      <div className="mb-32 flex justify-center text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        {/* {HeaderCardsData.map((el, idx) => {
          return (
            <LinkCard {...el} key={idx} />
          )
        })} */}
      </div>
    </header>
  )
}

export default PortfolioHeader;