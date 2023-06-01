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