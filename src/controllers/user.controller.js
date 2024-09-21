const { insertUser, getUsers } = require("../data_access/user");
module.exports = {
  get: async (req, res) => {
    const id = req.param("id");
    // const query = req.query;
    const users = [
      { id: 1, name: "jhon", username: "jhon1" },
      { id: 2, name: "jhon2", username: "jhon2" },
    ];
    if (id) {
      const user = users.find((user) => user.id === Number(id));
      return res.status(200).json(user);
    }

    const result = await getUsers();
    console.log("Result", result);
    return res.status(200).json({ data: result });
  },
  post: async (req, res) => {
    const data = req.body;

    const result = await insertUser(data);
    if (result.status) {
      return res.status(201).json({ message: result.message });
    }

    return res.status(401).json({ message: "Failed." });
  },
  put: (req, res) => {
    const id = req.param("id");
  },
  remove: (req, res) => {},
};
