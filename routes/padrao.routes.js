const router = require("express").Router();
const controler = require("../controllers/padrao.controller");

router.get("/", controler.home);
router.get("/usr", controler.getPerson);
router.get("/usr/:id", controler.getPersonByID);
router.post("/usr", controler.postPerson);
router.put("/usr/:id", controler.patchPerson);
router.delete("/usr/:id",controler.deletePerson);

module.exports = router;
