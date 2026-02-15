---
description: Push code to GitHub and deploy to Amazon S3
---

# Push to GitHub

1. Initialize Git repository (if not already done)
   ```bash
   git init
   ```

2. Add the remote repository
   ```bash
   git remote add origin https://github.com/Prabhat257285/LLM.git
   ```
   *Note: If origin already exists, use `git remote set-url origin https://github.com/Prabhat257285/LLM.git`*

3. Add all files to staging
   // turbo
   ```bash
   git add .
   ```

4. Commit changes
   ```bash
   git commit -m "Initial commit - LMS Frontend"
   ```

5. Push to GitHub
   ```bash
   git branch -M main
   git push -u origin main
   ```

# Deploy to Amazon S3

Prerequisites:
- AWS CLI installed and configured (`aws configure`).
- An S3 bucket created for website hosting.

1. Build the project for production
   // turbo
   ```bash
   npm run build
   ```

2. Sync build folder to S3
   Replace `your-bucket-name` with your actual S3 bucket name.
   ```bash
   aws s3 sync dist/ s3://your-bucket-name --delete
   ```

3. (Optional) Invalidate CloudFront (if using CloudFront)
   Replace `your-distribution-id` with your CloudFront Distribution ID.
   ```bash
   aws cloudfront create-invalidation --distribution-id your-distribution-id --paths "/*"
   ```
