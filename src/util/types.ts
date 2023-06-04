export type Style = {
    width? : string,
    height? : string,
    padding? : string,
    margin? : string,
}

export type Card = {
  children : React.ReactNode,
  style? : Style,
}

export type Project = {
  image : string,
  alt : string,
  title : string,
  content : string,
  feeling : string,
  job : string,
  repository? : string,
}

export type LinkButton = {
  url : string,
  title : string,
  passHref? : boolean,
}

export type Feed = {
  title : string,
  description : string,
  date : string,
}