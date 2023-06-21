import { NextApiRequest, NextApiResponse } from "next";

type ProjectData = {
  image : string,
  alt : string,
  title : string,
  job : string,
  content : string,
  feeling : string,
  repository : string,
  position : string,
  members : Number
}

export default function handler(request : NextApiRequest, response : NextApiResponse) {
  
  if (request.method === "POST") {

    const data : ProjectData = request.body;

    return response.status(200).json('와우 처리완료');
  }else {
    return response.status(405).end("없소");
  }

}