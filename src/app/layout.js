import "./globals.css";

export const metadata = {
  title: "ConnectNow",
  description: "Chat. Connect. Collaborate — Real-time chat made easy.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#0f1117] text-gray-200">
        {/* Navbar */}
        <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-[#151820]">
          <h1 className="text-2xl font-bold text-blue-500 tracking-tight">
            ConnectNow
          </h1>
          <div className="space-x-4 text-sm">
            <a href="/" className="hover:text-blue-400 transition-colors">Home</a>
            <a href="/login" className="hover:text-blue-400 transition-colors">Login</a>
            <a href="/signup" className="hover:text-blue-400 transition-colors">Signup</a>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 container py-10">{children}</main>

        {/* Footer */}
        <footer className="text-center py-4 text-gray-600 text-sm border-t border-gray-800">
          © {new Date().getFullYear()} ConnectNow. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
