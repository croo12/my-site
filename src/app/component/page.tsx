import CardComponent from "@/components/UI/Card";

const ComponentPage = () => {
  return (
    <>
      <div>
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