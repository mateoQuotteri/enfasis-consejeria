const express = require("express")
const router = express.Router()
const mainController = require("../controllers/mainController")


router.get("/", mainController.index)

router.get("/contactanos", mainController.contactus)
router.get("/nuestra-mision", mainController.ourmision)
router.get("/quienes-somos", mainController.whoweare)
router.get("/nuestro-servicio", mainController.ourservice)
module.exports = router