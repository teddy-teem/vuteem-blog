import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { getPosts } from "./homeSlice";
import { useSelector, useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch<any>();
  const { posts, status } = useSelector((state: any) => {
    console.log("=====>state", state.postsData);
    return state.postsData;
  });
  const [data, setData] = useState([]);
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
      <div className="flex flex-col w-full">
          {posts &&
            posts.map((p: any, key: any) => 
            <div key={key} className="mb-4 px-2 border-2 ease-in-out duration-300 rounded hover:cursor-pointer hover:shadow-md hover:shadow-rose-700 hover:erase-in-out py-2 m-2">
              <h3 className="text-red-700 text-xl">{key+1}. {p.title && p.title.toUpperCase()}</h3>
              <p className="text-green-900">{p.body}</p>
              {/* {p.title} */}
            </div>)}
            {/* <div dangerouslySetInnerHTML={{__html: data}} /> */}
        </div>
  );
}
