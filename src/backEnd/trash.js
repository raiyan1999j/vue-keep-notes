module.exports={

    trashGet:(req,res,connect)=>{
        let sql = 'select * from trash';

        connect.query(sql,(error,result)=>{
            if(error){
                console.log(error)
            }else{
                res.send(result)
            }
        })
    },

    trashPost:(req,res,connect)=>{
        let value = req.body.obj;

        let sql = `insert into keep.trash (id,color,pinned,title,task) values ("${value.id}","${value.color}","${value.pinned}","${value.title}","${value.task}")`;

        connect.query(sql,(error,result)=>{
            if(error){
                console.log(error)
            }else{
                res.send(result)
            }
        })
    },

    trashColor:(req,res,connect)=>{
        let value = req.body;

        let sql = `update keep.trash set color="${value.color}" where id="${value.id}"`;

        connect.query(sql,(error,result)=>{
            if(error){
                console.log(error)
            }else{
                res.send(result)
            }
        })
    },

    trashToArchive:(req,res,connect)=>{
        let value = req.body;

        let sql = `delete from keep.trash where id="${value.obj}"`;

        connect.query(sql,(error,result)=>{
            if(error){
                console.log(error)
            }else{
                res.send(result)
            }
        })
    },

    trashItem:(req,res,connect)=>{
        let value = req.body;

        let sql = `delete from keep.trash where id="${value.obj}"`;

        connect.query(sql,(error,result)=>{
            if(error){
                console.log(error)
            }else{
                res.send(result)
            }
        })
    },

    trashPin:(req,res,connect)=>{
        let value = req.body;

        let sql = `update keep.trash set pinned="${value.pinned}" where id="${value.id}"`;

        connect.query(sql,(error,result)=>{
            if(error){
                console.log(error)
            }else{
                res.send(result)
            }
        })
    },

    trashEdit:(req,res,connect)=>{
        let value = req.body;

        let sql = `update keep.trash set title="${value.title}", task="${value.task}" where id="${value.id}"`;

        connect.query(sql,(error,result)=>{
            if(error){
                console.log(error)
            }else{
                res.send(result)
            }
        })
    }
}