import getPost from "@/lib/getPost";

export default async function page({params}) {
    const {id} = params;
    const post = await getPost(id);
  return (
    <div className="mt-6 container m-auto ">
        <div className="p-2 shadow-lg rounded  ">
            <h4 className="font-bold text-lg" >{post.title.charAt(0).toUpperCase() + post.title.slice(1)}</h4>         
            <p>{post.body}</p>
        </div>
    </div>
  )
}
