export const runtime = "edge";

export async function POST(req: Request) {
  const { messages } = await req.json();

  try {
    const response = await fetch("https://df8f-115-96-219-10.ngrok-free.app/webhook/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages }),
    });

    const data = await response.json();

    return new Response(JSON.stringify({ message: data.message }), {
      status: 200,
    });

  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Failed to call n8n webhook", details: err }),
      { status: 500 }
    );
  }
}
