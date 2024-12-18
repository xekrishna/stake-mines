import { Button } from "../ui/button";
import Input from "../ui/input-bet";
import InputMines from "../ui/input-mines";

const Sidebar = () => {
  return (
    <div className="w-[20%] h-full p-5 border-r border-white/40 flex gap-3 flex-col">
      <Input label="Bet Amount" />
      <InputMines />
      <Button>Bet</Button>
    </div>
  );
};

export default Sidebar;
