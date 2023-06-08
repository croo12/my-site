import ProjectComponent from "@/components/Portfolio/Project/Project"
import css from "./page.module.css"
import CardComponent from "@/components/UI/Card"

import { Project } from "@/util/types"
import { connectDB } from "@/util/database"

const ProjectsComponent = async () => {

  const projects : Array<Project> = await getData();

  return (
    <div className={css["project-main"]}>
      {projects.map((el, idx) => {
        return <CardComponent><ProjectComponent {...el} key={idx} /></CardComponent>
      })}
    </div>
  )
}

export default ProjectsComponent;

export const getData = async () => {
  let projects : any;
  try {
    const db = (await connectDB)?.db("my-page");
    let res = await db?.collection("projects").find().toArray();

    projects = res;
  } catch (e) {
    console.log(e);
  }

  return projects
};

// const data = [
//   {
//       image : `/project/LIVE.gif`,
//       alt: "Live Project gif",
//       title : `LIVE`,
//       job : `
//           프론트 전반, WebRTC
//       `,
//       content: `
//           누구나 쉽게 집을 구할 수 있는 One-Stop 완전 비대면 부동산 서비스

//           Live는 부동산에 방문하여 직접 발품을 팔기 어려운 사람들을 위한 비대면 부동산 플랫폼으로, 온라인을 통해 간편하게 매물 정보를 획득할 수 있을 뿐만 아니라 국토교통부 부동산 거래 전자계약 시스템과 연결하여 고객과 부동산이 비대면으로도 실시간 소통 및 계약을 할 수 있는 One-Stop 서비스를 제공합니다.
//       `,
//       feeling : `
//           전반적으로 순조로웠지만, 발표 일주일 전, 모바일 기기에서 WebRTC 코드가 잘 작동하지 않는다는 사실을 깨닫고 자신있게 리팩토링 했다가 재앙이 일어났다.
          
//           갑자기 PC에서도 WebRTC 통신이 작동 했다가 안 했다가 하기 시작한 것이다.

//           다행히 원인을 찾아 잘 마무리 되었지만 발표 전날, 해결 못한 상태로 노트북을 멀거니 쳐다보던 감각은 아직 손에 잡힐 듯 남아있다.
          
//           형상관리와 테스팅에 대한 중요성을 다시 한번 깨닫게 되었다.

//           처음에는 프로젝트 컨셉이 제대로 정해지지 않아서 다대다 통신을 위해 kurento라는 시그널링 서버를 사용했는데, 결과적으로 1:1 통신 서비스로 정해지면서 별 필요가 없었다. 
          
//           kurento에 관한 자료를 찾느라 시간을 많이 허비했고, 처음 사용해보는 React, 리팩토링하다가 망친 건 까지 겹쳐서 구현하려고 했던 기능이나 페이지 디테일의 많은 부분을 포기하게 되어 슬펐다.
//       `
//   },
//   {
//       image : `/project/COOKSCAPE.gif`,
//       alt: "Cookscape Project gif",
//       title : "COOKSCAPE",
//       job : `
//           캐릭터와 카메라의 이동, 캐릭터 간 상호작용, 최적화, 클라이언트 로직
//       `,
//       content: `
//           아기자기한 요리 재료들이 펼치는 술래잡기 COOKSCAPE

//           4:1 비대칭 서바이벌 술래잡기 게임

//           유저간 실시간 소통이 가능한 메타버스

//           다양한 업적 및 보상시스템
//       `,
//       feeling : `
//           Unity는 참 좋은 툴이다.

//           개발과정은 버그와의 투쟁이었다. 버그로 배포 일자도 몇 번이나 미뤄졌고 중간에 배포하자 한 시간 사이에 버그 리포트가 10개 들어왔다.

//           최대 동접자는 32명 정도, 버그 리포트를 받고 플레이어를 보면서 문제점을 찾고, 패치를 만들어서 배포하는 것은 즐거운 경험이었다. exe 파일을 사용해 자동 패치가 적용하지 못한 것은 아쉽다.
          
//           배워가면서 만들다보니 비효율적으로 코드가 구성된 부분이 있었고 막판에는 우리끼리 정한 최소치 30FPS를 유지하기 위해 파일의 크기를 줄인다던가, 오클루전 컬링을 일일히 지정하기, 낯과 밤 삭제, 잔디 삭제 등 온갖 방법을 사용해야만 했다.

//           당장 동작하더라도 좋지 않은 코드를 작성했다면 언젠가 반드시 대가를 치른다는 생각이 들었다.

//           프로젝트는 게임 만들어본 적은 없지만 게임은 좋아하는 사람들이 모인 형상이었는데, 다행히 한 명이 전공자라 견적을 재면서 만들어 갈 수 있었다. 경험자가 있고 없고의 차이를 뼈저리게 실감했다.

//       `
//   },
//   {   
//       image: "/project/WOOAHAN.gif",
//       alt: "WooAHan Project gif",
//       title: "우아한",
//       job: `
//           담당 게임 제작(뛰어!쓰기), 프론트 전반, 하이브리드 앱에서 PC와 앱 간 통신 일부
//       `,
//       content: `
//           <우아한>은 게이미피케이션 요소를 통해 어린이가 한글에 흥미를 가지고 놀이로 학습할 수 있도록 돕는 하이브리드 앱.
          
//           어린이들이 선호하는 신체 활동을 중심으로 하는 한글 교육을 통해 어린이의 인지 발달, 언어 발달 도모.
          
//           이러한 놀이 교육의 장점을 누릴 수 있도록 어린이의 접근이 쉬운 모바일 어플리케이션으로 제작해 집에서 쉽게 한글 놀이교육이 가능하도록 구현하였습니다.
          
//           우아한은 7세 이상 한글을 배우고 있는 어린이를 대상으로 하는 서비스 입니다.
//       `,
//       feeling : `
//           의외로 고생을 많이한 프로젝트.

//           기획을 보고 제작이 쉽다고 생각했지만 나의 오만이었을 뿐.
          
//           소소하게 어린이를 위한 그림을 찾는 것도 어려웠지만, 웹 페이지를 만들고 어플리케이션으로 패키징하는 과정에서 생기는 오류들. 웹에서 3d 렌더링을 하면서 발생하는 지연현상. WebView에서 구글 로그인을 금지한 구글 정책 우회하기 등 내가 생각 못 한 일들이 일어났고, 배포도 처음 계획보다 일주일은 늦어졌다.

//           무엇보다 만들면서 아이들이 이 게임을 좋아할까? 하는 걱정이 많았는데, 그래도 아이의 니즈에 좀 맞았던 것 같아서 기분이 좋았다.
//       `
//   }
// ]