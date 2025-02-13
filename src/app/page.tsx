import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>

      <h1 className="font-bold text-4xl">Home</h1>
      <div className="flex item-center justify-between">
        <h1>Snippets</h1>
        <Link href={"/snippet/new"}><Button>New</Button></Link>

      </div>

    </div>

  );
}
