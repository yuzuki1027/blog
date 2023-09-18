import { isErrored } from "stream";

type User ={
    id : number,
    name : string,
    email : string,
};

// const getUsers = async() => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//      const users : User[] = await response.json();
//     return users;
// }
const getUsers = async () => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if(!response.ok) throw new Error('something went wrong');
    const users: User[] = await response.json();
    console.log(users);
    return users;
  };

const UsersList = async ()=> {
    const users =await getUsers();
    console.log(users);
    return (
        <>
        <h2 className="text-lg font-bold mt-4">ユーザー一覧</h2>
        <ul>
            {users && users.map((user) => <li key={user.id}> {user.name}</li>)}

        </ul>
        </>
    )
}
export default UsersList;