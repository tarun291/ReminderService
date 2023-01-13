const TicketService=require('../services/email-service');

const create=async(req,res)=>{
    try {
        const responce=await TicketService.createNotification(req.body);
        return res.status(201).json({
            success:true,
            data:responce,
            error:{},
            message:'Successfully registered an email reminder'
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            data:{},
            err:error,
            message:'Unable to register the email reminder'
        })
    }
}

module.exports={
    create
}