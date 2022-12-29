import { getTodoByID } from './../apis/todoApi';
import { atom, selector } from "recoil";

export const todoIdState = atom({
  key: "todoIdState",
  default: 1,
});

export const todoItemQuery = selector({
  key: "todoItemQuery",
  get: async ({get}) => {
    const id = get(todoIdState);

    try {
      const response = await getTodoByID(id);

      if(response.data.title === 'ipsa repellendus fugit nisi') console.log('check'); 

      return response.data;
    } catch (err) {
      throw err; 
    }
  }
});
