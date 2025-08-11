## AI-Powered Job Alert Agent
A fully automated and intelligent Job Alert System built with n8n, OpenAI/Gemini, React.js, and external job scraping tools like Apify. This system allows users to receive personalized job alerts in their inbox every day based on their preferred job keywords and location. It features a lightweight frontend for user onboarding, AI-powered summarization of job listings, and a complete unsubscribe workflow for user management.

## 🔗 Live Demo
- [In case the backend doesnt respond watch the video explanation of the project here](https://drive.google.com/file/d/1EPsWIJmGL6mSixbKjwrllNBmR6zFS-YI/view?usp=sharing)
- **Job Alert Form (Frontend)**: https://job-whisperer-53.lovable.app/
- n8n serving as a backend engine
- Fill the live form with your email, job role (e.g., "data scientist"), and preferred city to start receiving AI-summarized job alerts every day.

## 🧩 Key Features
1. Frontend Job Alert Form
A clean and responsive form built using React.js + Tailwind CSS for collecting user preferences (email, job keyword, location).

2. Automated Job Fetching
Jobs are scraped dynamically using Apify Actors, Feed43, or Huginn, depending on the source.

3. AI Summarization (LLM)
Uses OpenAI GPT-4 or Gemini Pro to convert long job descriptions into short, readable summaries.

4. Daily Email Alerts
A scheduled n8n Cron Trigger fetches jobs, summarizes them, and sends a daily digest email to each user.

5. Google Sheets as Backend
Acts as a lightweight and serverless database to manage users and store summaries.

6. Unsubscribe Workflow
A seamless unsubscribe experience using a webhook and email link. Deletes all user-related entries from the sheet automatically.

