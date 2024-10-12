import express from "express";
import { authorizeRoles, isAutheticated } from "../middleware/auth";
import { createLayout, editLayout, getLayoutByType } from "../controllers/layout.controller";
const layoutRouter = express.Router();

layoutRouter.post("/create-layout", isAutheticated,authorizeRoles("admin"),createLayout);   
// isAutheticated,authorizeRoles("admin"), -> this code was in the above line just for now i have cut this 

layoutRouter.put("/edit-layout", isAutheticated,authorizeRoles("admin"), editLayout);

layoutRouter.get("/get-layout/:type",getLayoutByType);


export default layoutRouter;