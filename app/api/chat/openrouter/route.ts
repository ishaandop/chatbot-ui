export const runtime = 'edge';

export async function POST(req: Request) {
  const body = await req.json();

  const response = await fetch("https://df8f-115-96-219-10.ngrok-free.app/webhook/chat-ui", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const result = await response.text(); // Or use `.json()` if you're returning JSON from n8n

  return new Response(result, {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

