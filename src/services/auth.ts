export async function createSession(params: {
  username: string;
  password: string;
}) {
  const { username, password } = params;
  const res = await fetch("/api/sessions", {
    method: "POST",
    body: JSON.stringify({ username, password }),
  });
  const data = await res.json();
  localStorage.setItem("access_token", data.token);
  return data;
}
