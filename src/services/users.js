import { users as data } from "../data/users";


let users = [...data];

export function getAllUsers() {
  return [...users];
}

export function getUserById(id) {
  return users.find((user) => user.id === id);
}

export function updateUser(id, userInfo) {
  users = users.map((user) => {
    if (user.id === id) {
      return {
        ...user,
        ...userInfo,
      };
    }

    return user;
  });
}

function generateId(arr){
  return arr.length > 0 ? Math.max(...arr.map(user => user.id)) + 1 : 1
}
export function addUser(userInfo) {
  const id = generateId(users)
  users.push({ id, ...userInfo})
  return id
}
