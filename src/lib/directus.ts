const BASE_URL = import.meta.env.DIRECTUS_URL as string;
const TOKEN = import.meta.env.DIRECTUS_TOKEN as string;

export async function fetchItems(collection: string, params = '') {
  const res = await fetch(`${BASE_URL}/items/${collection}${params}`, {
    headers: { Authorization: `Bearer ${TOKEN}` },
  });
  if (!res.ok) throw new Error(`Error ${res.status} al obtener ${collection}`);
  const json = await res.json();
  return json.data;
}

export function assetUrl(id: string | null) {
  if (!id) return null;
  return `${BASE_URL}/assets/${id}?access_token=${TOKEN}`;
}
