import express from "express";
const router = express.Router();



router.get('/', (req, res) => {
    res.send("This is Auth router");
});

router.get('/register', (req, res) => {
    res.send("The register page");
})
export default router;
