import type { APIRoute } from "astro";

const ghApiUrl = 'https://api.github.com/users/Kenzo-Wada/events/public';
const token = import.meta.env.GH_TOKEN;

const queryParamsJson = {
  per_page: '100',
  page: '2',
}

export const GET: APIRoute = async () => {
  const queryParams = new URLSearchParams(queryParamsJson);

  const response = await fetch(ghApiUrl + '?' + queryParams, {
    headers: {
      "Accept": "application/vnd.github+json",
      "Authorization": `Bearer ${token}`,
      "X-GitHub-Api-Version": "2022-11-28"
    }
  }
  );
  const rawData = await response.json();

  console.log('env', token);

  return new Response(JSON.stringify(rawData), {
    headers: {
      "Content-Type": "application/json"
    }
  })
}
