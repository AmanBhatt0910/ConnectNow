export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[80vh]">
      <h1 className="text-5xl font-extrabold text-white mb-4">
        Welcome to <span className="text-blue-500">ConnectNow</span>
      </h1>
      <p className="text-gray-400 text-lg max-w-xl mb-8">
        Chat seamlessly. Connect instantly. Collaborate efficiently — all in one modern, real-time messaging app.
      </p>

      <div className="flex space-x-4">
        <a
          href="/login"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          Get Started
        </a>
        <a
          href="/signup"
          className="border border-blue-600 text-blue-400 hover:bg-blue-600/10 px-6 py-3 rounded-lg font-medium transition-colors"
        >
          Create Account
        </a>
      </div>

      {/* Background glow */}
      <div className="absolute inset-0 -z-10 flex justify-center overflow-hidden">
        <div className="w-[40rem] h-[40rem] bg-blue-500/20 blur-3xl rounded-full absolute top-40"></div>
      </div>
    </section>
  );
}
