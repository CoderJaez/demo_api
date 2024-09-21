const connection = require("../configs/database");

module.exports = {
  insertUser: (data) => {
    try {
      connection.connect();
      connection.query(
        `INSERT INTO users (username, fullname, password) VALUES ("${data.username}", "${data.fullname}", "${data.password}")`,

        function (error, results) {
          if (error) throw error;
          console.log("The solution is: ", results);
        }
      );
      connection.end();
      return { status: true, message: "Successfully inserted user." };
    } catch (error) {
      console.log("Server Error:", error.message);
      return { status: false, message: "Server Error." };
    }
  },

  getUsers: async (id) => {
    return await new Promise((resolve, reject) => {
      connection.connect();
      connection.query("select * from users", function (error, results) {
        connection.end();
        if (error) return reject(error);
        console.log("Data:", results);
        resolve(results);
      });
    });
  },
};
