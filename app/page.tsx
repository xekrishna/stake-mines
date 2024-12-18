import Logs from "@/components/common/Logs";
import Sidebar from "@/components/common/Sidebar";
import Grid from "@/components/Grid";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-[100svh] w-full overflow-hidden bg-black">
      <div className="flex justify-center items-center h-[90svh] w-[95svw] rounded-lg bg-black border-white/40 border overflow-hidden">
        <Sidebar />
        <Grid />
        <Logs />
      </div>
    </main>
  );
}
