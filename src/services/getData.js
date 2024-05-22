const BASE_URL = "http://localhost:8000";

export async function getSocialMedia() {
  const res = await fetch(`${BASE_URL}/social-media`);

  if (!res.ok) {
    throw new Error(`HTTP Error : ${res.status}`);
  }

  const data = await res.json();
  return data;
}

export async function getUsers() {
  const res = await fetch(`${BASE_URL}/users`);
  if (!res.ok) {
    throw new Error(`HTTP error : status : ${res.status}`);
  }

  const data = await res.json();
  return data;
}
