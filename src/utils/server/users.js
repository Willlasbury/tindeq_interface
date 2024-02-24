const URL_PREFIX = import.meta.env.VITE_SERVER_URL;

const usersApi = {
  getUserTest: async () => {
    try {
      const res = await fetch(`${URL_PREFIX}/users/test`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });
      if (res.ok) {
        const data = await res.json();
        return data;
      } else {
        throw new Error(
          `Error fetching items: ${res.status} ${res.statusText}`
        );
      }
    } catch (error) {
      console.log("Error:", error);
      throw new Error(`Error fetching items: ${error.message}`);
    }
  },
  getUser: async (user, password) => {
    try {
      const res = await fetch(`${URL_PREFIX}/users`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        const data = await res.json();
        return data;
      } else {
        throw new Error(
          `Error fetching items: ${res.status} ${res.statusText}`
        );
      }
    } catch (error) {
      console.log("Error:", error);
      throw new Error(`Error fetching items: ${error.message}`);
    }
  },
  createUser: async (display_name, email, password) => {
    try {
      const body = {
        display_name: display_name,
        email: email,
        password: password,
      };
      console.log("body:", body)
      const res = await fetch(`${URL_PREFIX}/users`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });

      return res.json();
    } catch (err) {
      console.log("crud.js Error: ", err);
    }
  },
  login: async (email, password) => {
    try {
      const body = {
        email: email,
        password: password,
      };  
      const res = await fetch(`${URL_PREFIX}/users/login`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });
      return res.json();
    } catch (err) {
      console.log("crud.js Error: ", err);
    }
  },
};

export default usersApi;
