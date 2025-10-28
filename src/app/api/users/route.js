export async function GET() {
  const users = [
    { id: 1, name: "Aman" },
    { id: 2, name: "Jeewan" },
  ];
  return Response.json(users);
}