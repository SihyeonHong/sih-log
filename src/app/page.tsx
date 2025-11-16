import Main from "@/components/main";
import SideBar from "@/components/sidebar";
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
