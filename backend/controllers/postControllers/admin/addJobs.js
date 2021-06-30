const Job = require('../../../models/job')

module.exports = async(req,res)=> {
  const job = new Job(req.body.job)
  try {
    const result = await job.save();
    res.status(201).send(result)
  }catch(err){
    res.status(406).send({errMsg:err.message})
  }
}