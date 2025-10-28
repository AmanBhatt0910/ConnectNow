import "./globals.css";
import Navbar from "@/components/layout/Navbar";

export const metadata = {
  title: "ConnectNow",
  description: "Real-time chat application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#0f1117] text-gray-200">
        <Navbar />
        <main className="flex-1 container py-10">{children}</main>
        <footer className="text-center py-4 text-gray-600 text-sm border-t border-gray-800">
          © {new Date().getFullYear()} ConnectNow
        </footer>
      </body>
    </html>
  );
}
