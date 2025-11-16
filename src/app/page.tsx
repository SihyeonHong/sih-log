import Main from "@/components/main";
import SideBar from "@/components/sid2ebar";
import Header from "@/components/ui/header";

export default function Page() {
  return (
    <div className="bg-background-secondary text-foreground border-border min-h-screen border">
      <Header />
      <Main />
      <SideBar />
    </div>
  );
}
