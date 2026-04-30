const mongoose=require('mongoose');

const NotesSchema= new mongoose.Schema({
    title :{
        type: String,
        required:true,
        trim: true,
        maxlength: 100,
    },
    Body :{
        type: String,
        required:true,

    },
},{ 
  collection: 'my_personal_notes', 
  timestamps: true 
})