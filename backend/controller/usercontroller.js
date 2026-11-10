import { note } from "../model/usermodel";

export const createnote=async(req,res)=>{
  try{
    const {title,description}=req.body;
    const notes=await note.create({
      title,
      description
    });
    res.status(201).json({
      sucess:true,
      message:"notes created sucessfully",
      note
    })
  }
  catch(error){
    res.status(500).json({message:error.message});
  }
};

export const getNotes=async(req,res)=>{
  try{
    const notes=await note.find().sort({createdat:-1});
    res.status(200).json(notes);
  }
  catch(error){
    res.status(500).json({message:error.message});
  }
}

export const getNoteById=async(req,res)=>{
  try{
    const notes=await note.findById(req.params.id);
    if(!notes){
      return res.status(404).json({
        message:"note not found"
      });
    }
    res.status(200).json(notes);
  }
  catch(error){
    res.status(400).json({message:"Invalid noteID"})
  }
}

export const updateNote=async(req,res)=>{
  try{
    const {title,description}=req.body;
    const notes=await note.findByIdAndUpdate(
      req.params.id,
      {title,description},
    );
    if(!note){
      return res.status(404).json({
        message:"note not found"
      });
    }
    res.status(200).json({
      message:"Note updated",
      note
  })
  }
  catch(error){
    res.status(400).json({message:error.message});
  }
}

export const deletenote=async(req,res)=>{
   try{
    const notes=await note.findByIdandDelete(req.params.id);
    if(!notes){
      return res.status(404).json({
        message:"notes not found"
      })
    }
    res.status(200).json({
      message:"note deleted succesfully"
    });
   }
   catch(error){
    res.status(400).json({message:"INvalid note Id"});
   }
}

