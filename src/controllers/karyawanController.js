const response = require("../helper/response");

const {
  getAllKaryawanModel,
  postKaryawanModel,
  updateDataKaryawanModel,
  deleteDataKaryawanModel,
} = require("../models/karyawanModel");

module.exports = {
  getAllKaryawan: async (req, res) => {
    try {
      const result = await getAllKaryawanModel();
      return response.response(
        res,
        200,
        "Success get all karyawan data",
        result
      );
    } catch (error) {
      return response.response(res, 400, "Bad Request");
    }
  },
  insertKaryawan: async (req, res) => {
    try {
      const result = await postKaryawanModel(req.body);
      return response.response(res, 200, "Success post karyawan data", result);
    } catch (error) {
      return response.response(res, 400, "Bad Request");
    }
  },
  updateDataKaryawan: async (req, res) => {
    try {
      const result = await updateDataKaryawanModel(req.body, req.params.id);
      return response.response(
        res,
        200,
        `Success update karyawan data with id : ${req.params.id}`,
        result
      );
    } catch (error) {
      console.log(error);
      return response.response(res, 400, "Bad Request");
    }
  },
  deleteDataKaryawan: async (req, res) => {
    try {
      await deleteDataKaryawanModel(req.params.id);
      return response.response(
        res,
        200,
        `Success delete karyawan data with id : ${req.params.id}`
      );
    } catch (error) {
      console.log(error);
      return response.response(res, 400, "Bad Request");
    }
  },
};
