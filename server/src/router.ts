import { Router } from "express";
import controller, { logOut } from "./controller/controller";
import { getMe } from "./controller/controller";

const router:Router = Router();

router.get("/login", controller.getLogin);
router.get("/api/chart", controller.getApiChart);
router.get("/callback", controller.getCallback);
router.post("/findTrack", controller.findTrack);
router.get("/playlists", controller.getPlaylists);
router.get("/me", getMe);
router.get("/logout", logOut);

export default router;
