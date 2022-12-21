// src/mocks/handlers.js
import { rest } from "msw";

const todoDummy = [
  {
    id: 1,
    title: "React 5주차 강의 듣기",
  },
  {
    id: 2,
    title: "받아쓰기 숙제 하기",
  },
];

const userDummy = [
  {
    id: "charles",
    pw: 1234
  }
]

export const handlers = [
  rest.post('/todos', async (req, res, ctx) => {
    const data = await req.json()
    todoDummy.push(data);

    return res(
      ctx.status(200),
    )
  }),

  rest.get('/todos', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(todoDummy));
  }),
]