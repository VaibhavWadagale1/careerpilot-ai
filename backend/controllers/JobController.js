
const express = require("express");

const router = express.Router();

const getJobPosting = async(req,res) =>{
    try{
        const { boardToken='greenhouse' } = req.params;

    // URL मधून आलेला token validate करा
    if (!/^[a-zA-Z0-9_-]+$/.test(boardToken)) {
      return res.status(400).json({
        message: "Invalid Greenhouse board token",
      }); 
    }
    const apiUrl =
      `https://boards-api.greenhouse.io/v1/boards/${boardToken}/jobs?content=true`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      return res.status(response.status).json({
        message: "Greenhouse jobs fetch करता आले नाहीत",
      });
    }

    const data = await response.json();

    const jobs = (data.jobs || []).map((job) => ({
      id: job.id,
      title: job.title,
      company: boardToken,
      location: job.location?.name || "Not specified",
      description: job.content || "",
      postedAt: job.first_published || job.updated_at || null,
      updatedAt: job.updated_at || null,
      applyUrl: job.absolute_url,
      departments: (job.departments || []).map(
        (department) => department.name
      ),
    }));

    res.json({
      total: jobs.length,
      jobs,
    });
    }catch(e){
        return res.status(400).json({message:e.message})
    }
}
module.exports = getJobPosting
