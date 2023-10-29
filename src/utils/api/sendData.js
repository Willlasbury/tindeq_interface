// const URL_PREFIX = process.env.REACT_APP_SERVER_URL;

const URL_PREFIX='http://127.0.0.1:8000/test'

const api = {
  get: async () => {
    try {
      const response = await fetch(
        `${URL_PREFIX}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

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

  post: async (packet) => {
  try{
    const res = await fetch(
      `${URL_PREFIX}`,
      {
        method: "POST",
        body: packet,
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      
    return res.json()
  
  } catch (err){
    console.log(err);
    return res.status(500).json({msg:'some error', err:err})
  }
}
}

export default api