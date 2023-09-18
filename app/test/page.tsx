import UsersList  from "./UsersList";
import Counter from './Counter';
import PostsList from "./PostsList";
import { Suspense } from 'react';
const Test = () => {
    return(
    <>
    <h1 className="text-xl font-bold">Testページ</h1>
    <Counter />
    <Suspense fallback={<p className="mt-4">ユーザデータ　Loading...</p>}>
    
    <UsersList />
    </Suspense>
    <Suspense fallback={<p className="mt-4">記事データ　Loading...</p>}>
       
        <PostsList />
      </Suspense>
  </>
    );
  };
  
  
  export default Test;