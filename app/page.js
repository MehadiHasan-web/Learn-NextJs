import getAllPosts from "@/lib/getAllPosts";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {

  const posts = await getAllPosts();
  return (
    <main className="container mx-auto mt-4 h-screen">
      <div className="grid grid-cols-4 gap-2">
        {/* post 1 */}
        
        {posts.map((post) => (
          <div className="mb-2 p-3 shadow rounded bg-gray-50 border border-indigo-200 hover:border-indigo-600" key={post.id}>
            <Link href={`/post/${post.id}`}>
              <h4 className="font-bold text-lg text-yellow-950" >{post.title.charAt(0).toUpperCase() + post.title.slice(1)}</h4>         
                <p>{post.body.slice(0, 50)}</p>
            </Link>
          </div>
         ))}
      </div>
    </main>
  );
}
