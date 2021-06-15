const router = require("express").Router();

const {
  getAllKaryawan,
  insertKaryawan,
  updateDataKaryawan,
  deleteDataKaryawan,
} = require("../controllers/karyawanController");

router.get("/", getAllKaryawan);
router.post("/", insertKaryawan);
router.patch("/:id", updateDataKaryawan);
router.delete("/:id", deleteDataKaryawan);

module.exports = router;
