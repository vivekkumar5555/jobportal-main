// import express from "express";
// import isAuthenticated from "../middlewares/isAuthenticated.js";
// import { getCompany, getCompanyById, registerCompany, updateCompany } from "../controllers/company.controller.js";
// import { singleUpload } from "../middlewares/mutler.js";

// const router = express.Router();

// router.route("/register").post(isAuthenticated,registerCompany);
// router.route("/get").get(isAuthenticated,getCompany);
// router.route("/get/:id").get(isAuthenticated,getCompanyById);
// router.route("/update/:id").put(isAuthenticated,singleUpload, updateCompany);

// export default router;

import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { 
    getCompany, 
    getCompanyById, 
    registerCompany, 
    updateCompany 
} from "../controllers/company.controller.js";
import { singleUpload } from "../middlewares/multer.js"; // Ensure the path is correct

const router = express.Router();

// Route to register a company
router.route("/register").post(isAuthenticated, async (req, res) => {
    try {
        await registerCompany(req, res);
    } catch (error) {
        res.status(500).json({ message: "Error registering company", error });
    }
});

// Route to get all companies
router.route("/get").get(isAuthenticated, async (req, res) => {
    try {
        await getCompany(req, res);
    } catch (error) {
        res.status(500).json({ message: "Error fetching companies", error });
    }
});

// Route to get a company by ID
router.route("/get/:id").get(isAuthenticated, async (req, res) => {
    try {
        await getCompanyById(req, res);
    } catch (error) {
        res.status(500).json({ message: "Error fetching company", error });
    }
});

// Route to update a company by ID
router.route("/update/:id").put(isAuthenticated, singleUpload, async (req, res) => {
    try {
        await updateCompany(req, res);
    } catch (error) {
        res.status(500).json({ message: "Error updating company", error });
    }
});

export default router;
