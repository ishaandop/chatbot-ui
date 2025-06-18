export const runtime = "edge";

export async function POST(req: Request) {
  const body = await req.text();

  const authHeader = "Basic " + btoa("admin:daredevils");

  const response = await fetch("https://df8f-115-96-219-10.ngrok-free.app/webhook/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": authHeader
    },
    body
  });

  const result = await response.text();

  return new Response(result, {
    status: response.status,
    headers: { "Content-Type": "application/json" }
  });
}
