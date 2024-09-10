
const express = require("express")
const router = express.Router();

let categories = [
    {
        id: 1,
        name: "Infra"
    },
    {
        id: 2,
        name: "Desenvolvimento"
    },
    {
        id: 3,
        name: "Design"
    },
    {
        id: 4,
        name: "Planejamento"
    }
];

router.get("/", async (req, res) => {
    return res.status(200).json(categories)
})

module.exports = router;