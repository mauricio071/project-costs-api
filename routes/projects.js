const express = require("express");
const { v4: uuid } = require("uuid");
const router = express.Router();

let projects = []

router.get("/", (req, res) => {
    return res.status(200).json(projects);
});

router.get("/:id", (req, res) => {
    let project = projects.find((item => item.id === req.params.id))
    return res.json(project);
});

router.post("/", (req, res) => {
    const newProject = {
        id: uuid(),
        ...req.body
    }

    projects.push(newProject)
    return res.status(201).json(newProject)
})

router.patch("/:id", (req, res) => {
    let index = projects.findIndex(item => item.id === req.params.id)
    console.log(req.body);
    
    projects[index] = req.body
    return res.json(req.body)
});

router.delete("/:id", (req, res) => {
    let index = projects.findIndex(item => item.id === req.params.id)
    projects.splice(index, 1)
    return res.send(`Projeto apagado!`)
});

module.exports = router;
