const Note=require('../models/Note');

const getAllNotes= async(req,res,next)=>{
    try{
        const allNotes= await Note.find().sort({createdAt:-1});
        res.status(200).json({success:true, count:allNotes.length,data:allNotes});

    }
    catch(err){
        next(err);
    }
}

const createNote=async(req,res,next)=>{

    try{
        const note=Note.create(req.body);
        res.status(201).json({success:true,data:note});

    }
    catch(err){
        next(err);
    }

}

const getNoteById=async(req,res,next)=>{

    try{
        const note=await Note.findById(req.params.id);
        if(!note){
            return res.status(404).json({success:false, message:'Note not found'});
        }
            res.status(200).json({ success: true, data: note });

    }
    catch(err){
        next(err);
    }
}

const updateNote=async(req,res,next)=>{

    try{

    }
    catch(err){
        next(err);
    }
}

// PUT /api/notes/:id
const updateNote = async (req, res, next) => {
  try {
    const note = await Note.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }  // return updated doc, re-run schema validators
      // By default, findByIdAndUpdate returns the original document before update. Setting new: true returns the updated document.
      // runValidators: true ensures that the update operation respects the schema's validation rules.
    );
    if (!note) {
      return res.status(404).json({ success: false, message: 'Note not found' });
    }
    res.status(200).json({ success: true, data: note });
  } catch (error) {
    next(error);
  }
}

const deleteNote=async(req,res,next)=>{

    try{
        const note =await Note.findByIdAndDelete(req,params.id);
        if(!note){
            return res.status(404).json({success:false,message:'Note not found'});
        }
        res.status(200).json({success:true,message:'Note deleted successfully'});
    }
    catch(err){
        next(err);
    }
}
