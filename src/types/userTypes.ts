export interface User {
  name: string;
  toDoList: [
    {
      id: number;
      todo: string;
      completed: boolean;
    }
  ];
}