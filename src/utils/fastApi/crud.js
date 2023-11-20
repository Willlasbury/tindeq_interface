const URL_PREFIX = import.meta.env.VITE_SERVER_URL;

const api = {
  get: async () => {
    try {
      const res = await fetch(`${URL_PREFIX}/tindeq`, {
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

  post: async (bytes) => {
    try {
      const packet = {
        bytes: bytes,
      };

      const res = await fetch(`${URL_PREFIX}/tindeq`, {
        method: "POST",
        body: JSON.stringify(packet),
        headers: {
          "Content-Type": "application/json",
        },
      });

      return res.json();
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: "some error", err: err });
    }
  },
  // test func to check importing data to supabase
  // THIS ONLY WORKS WITH RLS DISABLED IN SUPABASE!!!
  // otherwise you will recieve cors error from server
  insertTest: async () => {
    try {
      const packet = {
        weight: "1.001",
      };

      const res = await fetch(`${URL_PREFIX}/measurement`, {
        method: "POST",
        body: JSON.stringify(packet),
        headers: {
          "Content-Type": "application/json",
        },
      });

      return res.json();
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: "some error", err: err });
    }
  },
  sendMaxWeight: async (maxWeight) => {
    try {
      const packet = {
        weight: maxWeight,
      };
      const res = await fetch(`${URL_PREFIX}/weights`, {
        method: "POST",
        body: JSON.stringify(packet),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      return data;
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: "some error", err: err });
    }
  },
  getAllMaxWeight: async () => {
    try {
      const res = await fetch(`${URL_PREFIX}/weights`, {
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
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: "some error", err: err });
    }
  },
};

export default api;
