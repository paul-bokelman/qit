import { Button } from ".";

export const Form: React.FC = () => {
  return (
    <div className="flex flex-col gap-3 text-lg">
      <input
        placeholder="Room Code"
        className="h-[58px] w-[260px] rounded-lg bg-qdark px-6 text-white/40 outline-none placeholder:text-white/40"
      ></input>
      <Button variant="primary" disabled={true}>
        Join
      </Button>
    </div>
  );
};
