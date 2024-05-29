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

export async function getFacebookData() {
  const res = await fetch(`${BASE_URL}/facebook`);

  if (!res.ok) {
    throw new Error(`HTTP error : ${res.status}`);
  }

  const data = await res.json();
  return data;
}

export async function getTwitterData() {
  const res = await fetch(`${BASE_URL}/twitter`);

  if (!res.ok) {
    throw new Error(`HTTP error : ${res.status}`);
  }

  const data = await res.json();
  return data;
}

export async function getLinkedinData() {
  const res = await fetch(`${BASE_URL}/linkedin`);

  if (!res.ok) {
    throw new Error(`HTTP error : ${res.status}`);
  }

  const data = await res.json();
  return data;
}

export async function getCalendarData() {
  const res = await fetch(`${BASE_URL}/calendar`);

  if (!res.ok) {
    throw new Error(`HTTP error : ${res.status}`);
  }

  const data = await res.json();
  return data;
}
