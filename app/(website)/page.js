import HomePage from "./home";
import { getAllPosts } from "@/lib/sanity/client";
import {postquery} from "@/lib/sanity/groq";

export default async function IndexPage() {
  const posts = await getData()

  return <HomePage posts={posts.data} />;
}

async function getData() {
  const res = await fetch(process.env.API_URL + '/accounts/homepage',{
    headers: {
      Authorization: `Bearer `+process.env.PRIVATE_TOKEN,
    },
  })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

// export const revalidate = 60;
