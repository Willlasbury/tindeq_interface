const URL_PREFIX = import.meta.env.VITE_SERVER_URL;

const api = {
  get: async () => {
    try {
      const response = await fetch(`${URL_PREFIX}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error(
          `Error fetching items: ${response.status} ${response.statusText}`
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
        'bytes': bytes
      }

      const res = await fetch(`${URL_PREFIX}`, {
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
};

export default api;
