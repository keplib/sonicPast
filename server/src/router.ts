const Router = require("express");
const router = Router();
const controller = require("./controller/controller");

router.get("/login", controller.getLogin);
router.get("/api/chart", controller.getApiChart);
router.get("/callback", controller.getCallback);
router.post("/findTrack", controller.findTrack);
router.get("/playlists", controller.getPlaylists);

export default router;
