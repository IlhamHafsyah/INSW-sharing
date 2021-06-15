const router = require("express").Router();

const karyawan = require("./routes/karyawanRoute");

router.use("/karyawan", karyawan);

module.exports = router;
