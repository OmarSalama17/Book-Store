import Image from "next/image";
import Main from "./components/Main/Main";

export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`);
  const data = await res.json();
  return <Main featuredBooks={data} />;
}
