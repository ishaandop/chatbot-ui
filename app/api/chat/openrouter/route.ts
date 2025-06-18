export async function POST(request: Request) {
  const { messages } = await request.json();

  const response = await fetch("https://df8f-115-96-219-10.ngrok-free.app/webhook/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ messages })
  });

  const result = await response.json();

  return new Response(JSON.stringify({ text: result.data }), {
    status: 200
  });
}
