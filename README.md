# Continuous Deployment using AWS Code Pipeline and S3
# 🎮 CodePipeline S3 Game Deployment

This project demonstrates **Continuous Deployment using AWS CodePipeline and Amazon S3** by hosting a simple browser-based game. Any changes pushed to the connected GitHub repository are automatically deployed to an S3-hosted static website.

## 🚀 Project Overview

This project showcases:

- A basic **browser game** (HTML/CSS/JS)
- **Amazon S3** used for static website hosting
- **AWS CodePipeline** for continuous deployment
- Integration with **GitHub** for automatic deployment on every push

📌 Live changes are instantly reflected on the hosted site after each Git push — no manual deployment needed.


## ⚙️ How It Works

1. **GitHub Repository**  
   This repo is the source of truth for the game files.

2. **AWS S3**  
   A bucket is configured for static website hosting.

3. **AWS CodePipeline**  
   - **Source**: GitHub repository  
   - **Deploy**: S3 bucket  
   - Automatically triggers a pipeline execution whenever a change is pushed to `main`.

## 🌐 Live Demo

> 🟢 Once deployed, the game can be accessed through the S3 static website URL.

## 🛠️ Setup Guide

> **Prerequisites**: AWS Account, IAM permissions to create S3 buckets and CodePipeline.

1. **Create an S3 Bucket**
   - Enable **Static Website Hosting**
   - Set permissions to allow public access for web assets (optional: use CloudFront for security)

2. **Create a CodePipeline**
   - **Source**: Connect to GitHub and select this repository
   - **Deploy**: Select the S3 bucket as the deployment target

3. **Push Changes to GitHub**
   - CodePipeline detects the changes and updates the S3 bucket
   - The static site reflects the changes instantly

## 📸 Screenshots

<img src="">
<img src="">



