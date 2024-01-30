import Spp from "../models/SppModel.js";

export const getSpp = async(req, res) => {
    try {
        const response = await Spp.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getSppById = async(req, res) => {
    try {
        const response = await Spp.findOne({
            where:{
                id:req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createSpp = async (req, res) => {
    try {
        await Spp.create(req.body);
        res.status(201).json({ msg: "Spp Created" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const updateSpp = async (req, res) => {
    try {
        await .update(req.body, {
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({ msg: " Updated" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const delete = async (req, res) => {
    try {
        await .destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({ msg: " Deleted" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
