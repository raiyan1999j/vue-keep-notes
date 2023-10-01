module.exports={

    archiveGet:(req,res,connect)=>{
        let sql = 'select * from archive';

        connect.query(sql,(error,result)=>{
            if(error){
                console.log(error)
            }else{
                res.send(result)
            }
        })
    },

    archivePost:(req,res,connect)=>{
        let value = req.body.obj;

        let sql = `insert into archive (id,color,pinned,title,task) values ("${value.id}","${value.color}","${value.pinned}","${value.title}","${value.task}")`;

        connect.query(sql,(error,result)=>{
            if(error){
                console.log(error)
            }else{
                res.send(result)
            }
        })
    },

    archiveColor:(req,res,connect)=>{
        let value = req.body;

        let sql = `update keep.archive set color="${value.color}" where id="${value.id}"`;

        connect.query(sql,(error,result)=>{
            if(error){
                console.log(error)
            }else{
                res.send(result)
            }
        })
    },

    archiveToNotes:(req,res,connect)=>{
        let value = req.body;

        let sql = `delete from keep.archive where id="${value.obj}"`;

        connect.query(sql,(error,result)=>{
            if(error){
                console.log(error)
            }else{
                res.send(result)
            }
        })
    },

    archiveToTrash:(req,res,connect)=>{
        let value = req.body;

        let sql = `delete from keep.archive where id="${value.obj}"`;

        connect.query(sql,(error,result)=>{
            if(error){
                console.log(error)
            }else{
                res.send(result)
            }
        })
    },

    archivePin:(req,res,connect)=>{
        let value = req.body;

        let sql = `update keep.archive set pinned="${value.pinned}" where id="${value.id}"`;

        connect.query(sql,(error,result)=>{
            if(error){
                console.log(error)
            }else{
                res.send(result)
            }
        })
    },

    archiveEdit:(req,res,connect)=>{
        let value = req.body;

        let sql = `update keep.archive set title="${value.title}", task="${value.task}" where id="${value.id}"`;

        connect.query(sql,(error,result)=>{
            if(error){
                console.log(error)
            }else{
                res.send(result)
            }
        })
    }
}