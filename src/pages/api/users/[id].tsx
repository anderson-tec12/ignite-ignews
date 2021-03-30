import { NextApiResponse, NextApiRequest } from "next";

export default (request:NextApiRequest, response:NextApiResponse) => {
  const id = Number(request.query.id)
  const user = [
    {id: 1, name:"Anderson"},
    {id: 2, name:"Mivane"},
    {id: 3, name:"Raphael"},
    {id: 4, name:"Davi"},
    {id: 5, name:"Gabriel"},
  ].find(user => id === id)
  
  return response.json(user)
}