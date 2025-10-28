export default function Badge({ label, color = "blue" }) {
  const colors = {
    blue: "bg-blue-600/20 text-blue-400 border-blue-600/30",
    green: "bg-green-600/20 text-green-400 border-green-600/30",
    red: "bg-red-600/20 text-red-400 border-red-600/30",
    gray: "bg-gray-700 text-gray-400 border-gray-700",
  };

  return (
    <span
      className={`px-2 py-0.5 rounded-full text-xs border font-medium ${colors[color]}`}
    >
      {label}
    </span>
  );
}
