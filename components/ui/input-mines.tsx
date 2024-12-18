import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";

const InputMines = () => {
  return (
    <div className="space-y-1">
      <div className="flex justify-between items-center">
        <span className="font-medium text-base text-white/80">Mines</span>
      </div>
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="" />
        </SelectTrigger>
        <SelectContent defaultValue="2">
          <SelectItem value="1">1</SelectItem>
          <SelectItem value="2">2</SelectItem>
          <SelectItem value="3">3</SelectItem>
          <SelectItem value="4">4</SelectItem>
          <SelectItem value="5">5</SelectItem>
          <SelectItem value="6">6</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default InputMines;
