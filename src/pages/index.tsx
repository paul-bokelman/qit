import type { NextPageWithConfig } from "@/types";
import Link from "next/link";
import { Form } from "@/components";

const Home: NextPageWithConfig = () => {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl font-bold text-white">Join Room</h2>
          <div className="flex flex-col items-center gap-2">
            <Form />
            <Link href="/" className="text-white/80">
              Create a room
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
