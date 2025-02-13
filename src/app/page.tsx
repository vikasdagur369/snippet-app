import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>

      <h1 className="font-bold text-4xl">Home</h1>
      <div className="flex item-center justify-between">
        <h1>Snippets</h1>
        <Button>New</Button>

      </div>

    </div>

  );
}
