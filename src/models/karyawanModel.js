const client = require("../config/postgre");

module.exports = {
  getAllKaryawanModel: () => {
    return new Promise((resolve, reject) => {
      client.query("SELECT * FROM karyawan", (error, result) => {
        if (!error) {
          resolve(result.rows);
        } else {
          reject(new Error(error));
        }
      });
    });
  },
  postKaryawanModel: (data) => {
    return new Promise((resolve, reject) => {
      client.query(
        "INSERT INTO karyawan (name, phone, email) VALUES ($1, $2, $3) RETURNING nik, name, phone, email",
        [data.name, data.phone, data.email],
        (error, result) => {
          if (!error) {
            resolve(result.rows);
          } else {
            reject(new Error(error));
          }
        }
      );
    });
  },
  updateDataKaryawanModel: (data, id) => {
    return new Promise((resolve, reject) => {
      client.query(
        `UPDATE karyawan SET name = '${data.name}', phone = '${data.phone}', email = '${data.email}' WHERE nik = ${id} RETURNING nik, name, phone, email`,
        (error, result) => {
          if (!error) {
            resolve(result.rows);
          } else {
            reject(new Error(error));
          }
        }
      );
    });
  },
  deleteDataKaryawanModel: (id) => {
    return new Promise((resolve, reject) => {
      client.query(
        `DELETE FROM karyawan WHERE nik = ${id}`,
        (error, result) => {
          if (!error) {
            resolve(result.rows);
          } else {
            reject(new Error(error));
          }
        }
      );
    });
  },
};
