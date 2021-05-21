const express = require("express");
const Router = express.Router();
const apkController = require("../controller/apkController");
const authController = require("../controller/authController");
Router.get("/approved", apkController.allApprovedApk);
Router.get("/trend", apkController.trendingApks);
Router.get("/papular", apkController.papularApks);
Router.get("/getAllCate", apkController.getAllCate);
Router.get("/download/:title", apkController.getDownload);
Router.get("/:title", apkController.getApk);
// here cate means subCate
Router.get("/samecate/:cate", apkController.getSameCateApps);
Router.use(authController.protect);
Router.post("/addApk", apkController.uploadImage, apkController.addApk);
Router.patch(
  "/addApkFile/:title",
  apkController.uploadFile,
  apkController.uploadFileHandler
);

Router.patch(
  "/addApkImages/:title",
  apkController.uploadMultiImages.array("images", 10),
  apkController.saveImages,
  apkController.uploadImagesHandler
);

Router.get("/allApk", apkController.getAllApk);
Router.use(authController.restrictTo("admin"));
Router.get("/states", apkController.getStates);

Router.delete("/deleteApk/:title", apkController.deleteApk);
Router.patch("/updateActions", apkController.updateActions);
Router.post("/addCate", apkController.addCategory);
Router.get("/getcategory/:category", apkController.getcategory);

Router.patch(
  "/addSubCate/:cate",
  apkController.uploadImage,
  apkController.addSubCategory
);
Router.delete("/deleteCate/:cate", apkController.removeCategory);

// Router.post("/signin", apkController.signin);
// Router.get("/getAll", apkController.getAllUsers);
module.exports = Router;
