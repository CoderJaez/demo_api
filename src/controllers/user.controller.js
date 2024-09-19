module.exports = {
  get: (req, res) => {
    const id = req.param("id");
    const query = req.query;
    console.log(query);
    const users = [
      { id: 1, name: "jhon", username: "jhon1" },
      { id: 2, name: "jhon2", username: "jhon2" },
    ];
    if (id) {
      const user = users.find((user) => user.id === Number(id));
      return res.status(200).json(user);
    }
    return res.status(200).json(users);
  },
  post: (req, res) => {
    const data = req.body;

    console.log("data:", data);

    return res
      .status(201)
      .json({ message: "Success created user.", data: data });
  },
  put: (req, res) => {
    const id = req.param("id");
  },
  remove: (req, res) => {},
};
