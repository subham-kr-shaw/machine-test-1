import express from "express";
import { createnote, deletenote, getNoteById, getNotes, updateNote } from "../controller/usercontroller";
 const router=express.Router();

router.post("/",createnote);

router.get("/",getNotes);

router.get("/:id",getNoteById);

router.put("/:id",updateNote);

router.delete("/:id",deletenote);

export default router;