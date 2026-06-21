import Sidebar from "./Sidebar";
import Header from "./Header";

export default function DashboardLayout({
  children,
}) {
  return (
    <div className="flex min-h-screen">

      <Sidebar />

      <main className="flex-1">

        <Header />

        <div className="p-6">
          {children}
        </div>

      </main>

    </div>
  );
}