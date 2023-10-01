module.exports={

    getValue:(req,res,connect)=>{
        let sql ='select * from keep.notes';

        connect.query(sql,(error,result)=>{
            if(error){
                console.log(error)
            }else{
                res.send(result)
            }
        })
    },

    notesPost:(req,res,connect)=>{
        let value = req.body.obj;

        let sql = `insert into notes (id,color,pinned,title,task) values ("${value.id}","${value.color}","${value.pinned}","${value.title}","${value.task}")`;

        connect.query(sql,(error,result)=>{
            if(error){
                console.log(error)
            }else{
                res.send(result)
            }
        })
    },

    addValue:(req,res,connect)=>{
        let value = req.body

        let sql = `insert into notes (id,color,pinned,title,task) values (
            "${value.id}","${value.color}","${value.pinned}","${value.title}","${value.task}"
        )`;

        connect.query(sql,(error,result)=>{
            if(error){
                console.log(error)
            }else{
                res.send(result)
            }
        })
    },

    colorValue:(req,res,connect)=>{
        let value = req.body;

        let sql = `update keep.notes set color="${value.color}" where id="${value.id}"`;

        connect.query(sql,(error,result)=>{
            if(error){
                console.log(error)
            }else{
                res.send(result)
            }
        })
    },

    pinValue(req,res,connect){
        let value = req.body;

        let sql = `update keep.notes set pinned="${value.pinned}" where id="${value.id}"`;

        connect.query(sql,(error,result)=>{
            if(error){
                console.log(error)
            }else{
                res.send(result)
            }
        })
    },

    editValue(req,res,connect){
        let value = req.body;

        let sql = `update keep.notes set title="${value.title}", task="${value.task}" where id="${value.id}"`;

        connect.query(sql,(error,result)=>{
            if(error){
                console.log(error)
            }else{
                res.send(result)
            }
        })
    },

    notesToArchive(req,res,connect){
        let value = req.body;

        let sql = `delete from keep.notes where id="${value.obj}"`;

        connect.query(sql,(error,result)=>{
            if(error){
                console.log(error)
            }else{
                res.send(result)
            }
        })
    },

    notesToTrash(req,res,connect){
        let value = req.body;

        let sql = `delete from keep.notes where id="${value.obj}"`;

        connect.query(sql,(error,result)=>{
            if(error){
                console.log(error)
            }else{
                res.send(result)
            }
        })
    }
    
}