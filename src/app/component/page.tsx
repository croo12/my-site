import CardComponent from "@/components/UI/Card";

const ComponentPage = () => {
  return (
    <>
      <div>
        <h1>이 페이지는 공사중 입니다</h1>
        <CardComponent style={{ width: "33%" }}>
          <div>반가워요</div>
        </CardComponent>
        <CardComponent style={{ width: "33%" }}>
          <div>으이?</div>
        </CardComponent>
        <CardComponent style={{ width: "33%" }}>
          <div>반가워요</div>
        </CardComponent>
      </div>
    </>

  )
}

export default ComponentPage;