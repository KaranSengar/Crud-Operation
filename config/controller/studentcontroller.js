import mysqlpool from "../db.js"

export const createstudent = async(req,res)=>{
try{
   
 const [getstudent] = await mysqlpool.query('SELECT * FROM students')
 if(!getstudent){
     return res.status(404).send({
        success:false,
        msg:"no records found"
     })
 }
 res.status(200).send({
    success:true,
    msg:"all students records",
    getstudent
 })

}catch(err){
    console.log(err)
    res.status(500).json({
        success:false,
        msg:'error in get all student api',
        err
    })
}

}



export const singledata = async(req,res)=>{
 try{
  const {id}=req.params
  if(!id){
    return res.status(404).send({
       success:false,
       msg:"invalid or provide student id",
    })
}

//const data = await mysqlpool.query(`SELECT * FROM students WHERE id=`+id)
const [data]  =await mysqlpool.query(`SELECT * FROM students WHERE id=?`,[id])
if(!data){
    return res.status(404).send({
       success:false,
       msg:"No records founds",
    })
}
res.status(200).json({
    success:true,
    message:"single data is get successfully",
    data

})

 }catch(err){
    console.log(err)
    res.status(500).json({
        success:false,
        msg:'error in get single student api',
        err
    })
 }
}

export const createdata = async(req,res)=>{
    try{
   const {name,roll_no,fees,medium}=req.body
   const studentClass = req.body["class"];
    if(!name || !roll_no || !medium || !fees || !studentClass){
        return res.status(404).send({
            success:false,
            msg:"required the all fields"
         })
        }
     const [result] = await mysqlpool.query(
        "INSERT INTO students(name,roll_no,fees,class,medium) VALUES (?,?,?,?,?)",
    [name,roll_no,fees,studentClass,medium]
    );
     
    res.json({
        success: true,
        msg: "Student data inserted successfully",
        data: result,
    });

    
    }catch(err){
    console.log(err)
    res.status(500).json({
        success:false,
        msg:'error in get all student api',
        err
    })
}
}

export const updatedata = async(req,res)=>{
    try{
        
   const {id}=req.params;
   if(!id){
    return res.status(404).send({
       success:false,
       msg:"invalid or provide student id",
    })
}
const{name,roll_no,fees,medium}=req.body
const data =await mysqlpool.query(`UPDATE students SET name= ? , roll_no = ?, fees = ?, medium = ? WHERE id = ?`,[name,roll_no,fees,medium, id])
if(!data){
    return res.status(404).send({
       success:false,
       msg:"No records founds",
    })
}
res.status(200).json({
    success:true,
    message:"update  successfully",
    data

})


    }catch(err){
        console.log(err)
        res.status(500).json({
            success:false,
            msg:'error in get all student api',
            err
        })
    }
}

export const deletedata =async (req,res)=>{
    try{
   const {id}=req.params
   if(!id){
    return res.status(404).send({
       success:false,
       msg:"invalid or provide student id",
    })
}
await mysqlpool.query(`DELETE FROM students WHERE id = ?`,[id])


res.status(200).json({
    success:true,
    msg:"student deleted successfully"
})


    }catch(err){
        console.log(err)
        res.status(500).json({
            success:false,
            msg:'delete student api',
            err
        })
    }
}