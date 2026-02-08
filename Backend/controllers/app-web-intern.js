import appModel from "../models/app.js";
import webModel from "../models/web.js";
import internModel from "../models/intern.js";
import { v4 as uuidv4 } from "uuid";

/* ================= USER CONTROLLERS ================= */

// APP
export const appController = async (req, res) => {
  try {
    const { email, appName, status } = req.body;

    const newApp = new appModel({
      appId: uuidv4(),
      email,
      appName,
      status,
    });

    await newApp.save();
    res.status(201).json(newApp);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// WEB
export const webController = async (req, res) => {
  try {
    const { email, webName, status } = req.body;

    const newWeb = new webModel({
      webId: uuidv4(),
      email,
      webName,
      status,
    });

    await newWeb.save();
    res.status(201).json(newWeb);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// INTERN
export const internController = async (req, res) => {
  try {
    const { email, internshipName, duration } = req.body;

    const newIntern = new internModel({
      internId: uuidv4(),
      email,
      internshipName,
      duration,
    });

    await newIntern.save();
    res.status(201).json(newIntern);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* ================= ADMIN – INTERN ================= */

// UPDATE INTERN
export const adminUpdateIntern = async (req, res) => {
  try {
    const updatedIntern = await internModel.findOneAndUpdate(
      { internId: req.params.id },   
      req.body,
      { new: true }
    );

    res.json(updatedIntern);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// GET ALL INTERN
export const adminGetAllIntern = async (req, res) => {
  try {
    const interns = await internModel.find();
    res.status(200).json(interns);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE INTERN
export const adminDeleteIntern = async (req, res) => {
  try {
    await internModel.findOneAndDelete({
      internId: req.params.id,       
    });

    res.json({ message: "Internship deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


/* ================= ADMIN – APP ================= */

// UPDATE APP
export const adminUpdateApp = async (req, res) => {
  try {
    const updatedApp = await appModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedApp);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL APP
export const adminGetAllApp = async (req, res) => {
  try {
    const apps = await appModel.find();
    res.status(200).json(apps);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE APP
export const adminDeleteApp = async (req, res) => {
  try {
    await appModel.findByIdAndDelete(req.params.id);
    res.json({ message: "App deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* ================= ADMIN – WEB ================= */

// UPDATE WEB
export const adminUpdateWeb = async (req, res) => {
  try {
    const updatedWeb = await webModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedWeb);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL WEB
export const adminGetAllWeb = async (req, res) => {
  try {
    const webs = await webModel.find();
    res.status(200).json(webs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE WEB
export const adminDeleteWeb = async (req, res) => {
  try {
    await webModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Web deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// -------------- find data by email (for user) --------------

export const getInternByEmail = async (req, res) => {
  try {
    const { email } = req.body; 

    const interns = await internModel.find({ email });

    res.status(200).json(interns);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAppByEmail = async (req, res) => {
  try {
    const { email } = req.body;

    const apps = await appModel.find({ email });

    res.status(200).json(apps);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getWebByEmail = async (req, res) => {
  try {
    const { email } = req.body;

    const webs = await webModel.find({ email });

    res.status(200).json(webs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
