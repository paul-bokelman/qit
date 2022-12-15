import { Nav } from "@/components/Nav";
import { type NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <div>
        <Nav />
      </div>
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

const Form: React.FC = () => {
  return (
    <div className="flex flex-col gap-2 text-lg">
      <input
        placeholder="Room Code"
        className="h-[58px] w-[260px] rounded-lg bg-QDark px-6 text-white/40 outline-none placeholder:text-white/40"
      ></input>
      <button className="flex h-[58px] items-center justify-center rounded-lg bg-QDark font-semibold text-white">
        Join
      </button>
    </div>
  );
};
