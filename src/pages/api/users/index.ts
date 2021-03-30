import { NextApiResponse, NextApiRequest } from "next";

export default (request:NextApiRequest, response:NextApiResponse) => {
  const users = [
    {id: 1, name:"Anderson"},
    {id: 2, name:"Mivane"},
    {id: 3, name:"Raphael"},
    {id: 4, name:"Davi"},
    {id: 5, name:"Gabriel"},
  ]

  return response.json(users)
}