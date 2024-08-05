const URL_PREFIX = import.meta.env.VITE_SERVER_URL;

export default async function validateToken(accessToken, refreshToken) {
  try {
    
    const res = await fetch(`${URL_PREFIX}/users/token`, {
      method: "GET",
      headers: {
        Authorization: `${accessToken}`,
        "Refresh-Token": `${refreshToken}`,
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
        const data = await res.json();
        if (data.session.access_token) {
            localStorage.setItem("access_token", data.session.access_token);
            localStorage.setItem("refresh_token", data.session.refresh_token);
            return true
      } else {
        throw new Error(
          `Error fetching items: ${res.status} ${res.statusText}`
        );
      }
    }
  } catch {
    return false;
  }
}
