import { render } from "@react-email/render";
import Email from "./Email";

const html = render(<Email />, {
  pretty: true,
});

export async function GET(request: Request) {
  return new Response(html, {
    headers: {
      "Content-Type": "text/html",
    },
  });
}
