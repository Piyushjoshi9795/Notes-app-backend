const express=require('express');
const router=express.Router();

const {getAllNotes,createNote,updateNote,getNoteById,deleteNote}=require('../controllers/noteController');


router.route('/')
  .get(getAllNotes)
  .post(createNote);

router.route('/:id')
  .get(getNoteById)
  .put(updateNote)
  .delete(deleteNote);

  module.exports=router;