# Job Alert Agent
An automated, AI-powered workflow that finds jobs for you, filters them based on your preferences, summarizes them, and sends them straight to your inbox — every day, without you having to lift a finger.

## Live Links
- <img src="https://unpkg.com/feather-icons/dist/icons/link.svg" width="20" /> **Try Yourself**: [Click Here](https://job-whisperer-53.lovable.app/)
- <img src="https://unpkg.com/feather-icons/dist/icons/link.svg" width="20" /> **Video Explanation of the Project**: [Video](https://drive.google.com/file/d/1EPsWIJmGL6mSixbKjwrllNBmR6zFS-YI/view?usp=sharing)

## Overview
Scrolling through endless job boards is a time sink. Most listings are irrelevant, and the few that matter get buried in the noise.
This project was built to cut that noise.

The Job Alert Agent automates the entire process:
1. Collects your preferences (role, location, keywords).
2. crapes fresh listings from online job boards every day.
3. Uses AI to summarize each job so you only see what matters.
4. Sends it all to you in a neatly formatted email.

Everything runs automatically, so you don’t have to check websites or filter listings manually. The unsubscribe button works instantly — no shady “wait 7 business days” nonsense.

## Why I Built it
While experimenting with AI agents and low-code automation at IIT Jammu, I wanted a real, useful project that solved a personal pain point: filtering jobs efficiently.
Instead of writing a heavy backend from scratch, I used n8n to design visual workflows, Apify for scraping, and Gemini API for job summarization.
The result? A working production system in a fraction of the time it would have taken with traditional development.

## Features
- Daily job fetching from Naukri.com (expandable to other sources).
- AI summarization for clean, quick-to-read job descriptions.
- Preference-based filtering using keywords + location.
- Email digests with clickable job links.
- One-click unsubscribe that actually deletes your data.
- Serverless deployment (frontend + backend in the cloud).

## How it Works
### Frontend (Lovable + React + TypeScript)
- Users submit their preferences through a form (email, job title, skills, location).
- Data is sent via webhook to the n8n backend.
- Every email contains an “unsubscribe” link that triggers instant removal from the database.

### Backend (Self-Hosted N8N containing the backend workflow)
1. Fetch preferences from Google Sheets (acts as a simple database).
2. Scrape jobs via Apify, passing in user-specific keywords and location.
3. Summarize descriptions with Gemini API into a compact format:
4. Apply filtering logic with Code node (JavaScript)

  - This custom JavaScript step filters the AI-generated job summaries to include only those matching the user’s role, keywords, and location.
  - Also adds a fallback to send related jobs if no exact matches are found, so the user never receives an empty email.

5. Store summaries in a separate sheet for easy retrieval.
6. Format email with HTML so it looks clean and scannable.
7. Send email using Gmail integration in n8n.
8. Handle unsubscriptions by deleting both preference and summary data.

### Architecture
**Subscribe Workflow**

![](assets/screenshots/Screenshot%202025-08-04%20162200.png)

**Unsubscribe Workflow**

![](assets/screenshots/Screenshot%202025-08-04%20161724.png)

## Tech Stack

| Layer      | Tool / Platform            | Purpose                                            |
| ---------- | -------------------------- | -------------------------------------------------- |
| Frontend   | <img src="https://cdn.simpleicons.org/react/61DAFB" width="20" /> React, <img src="https://cdn.simpleicons.org/typescript/3178C6" width="20" /> TypeScript, Lovable | Subscription form + unsubscribe                    |
| Automation | <img src="https://cdn.simpleicons.org/n8n/EA4E62" width="20" /> n8n                        | Orchestrates scraping, summarization, and emailing |
| Scraping   | 🕷️ Apify                      | Fetches job data from external sites               |
| AI         | <img src="https://cdn.simpleicons.org/gmail/EA4335" width="20" /> Gemini API                 | Summarizes long job descriptions                   |
| Code Nodes | <img src="https://cdn.simpleicons.org/javascript/F7DF1E" width="20" /> Javascript                 | Filters the Jobs according to user preferences     |
| Database   | <img src="https://cdn.simpleicons.org/googlesheets/34A853" width="20" /> Google Sheets              | Stores preferences & job summaries                 |
| Emailing   | <img src="https://cdn.simpleicons.org/gmail/EA4335" width="20" /> Gmail API (n8n)            | Sends personalized digests                         |
| Hosting    | 🌐 Lovable + <img src="https://cdn.simpleicons.org/render/46E3B7" width="20" /> Render           | Frontend & backend deployment                      |

## Challenges and Solutions

| Challenge                             | Solution                                                        |
| ------------------------------------- | --------------------------------------------------------------- |
| RSS job feeds were unreliable         | Moved to Apify scraping for more stable, structured results     |
| API cost & rate limits                | Limited daily results per user and optimized workflow execution |
| No matches for niche preferences      | Added fallback to related jobs so emails are never empty        |
| Sensitive URLs exposed in frontend    | Moved webhooks & API keys to environment variables              |
| Unsubscribe wasn’t clearing summaries | Updated workflow to delete both preferences and stored results  |
| Community nodes & credentials in self-hosted n8n could be lost after one-time use     | Used free PostgreSQL on Render for persistence                  |
| Needed secure, consistent storage for workflows | Followed n8n docs to connect and store them safely              |


## Future Improvements
- Pull listings from multiple platforms (Indeed, LinkedIn, etc.).
- Move storage from Google Sheets to Firebase or MongoDB for scale.
- Let users pick their preferred summary style or tone.
- Add a personal dashboard to manage history and preferences.
- Introduce recruiter tools to post jobs and auto-match candidates.

## Screenshots

### Frontend UI
![](assets/screenshots/Screenshot%202025-08-12%20150719.png)

![](assets/screenshots/Screenshot%202025-08-12%20150737.png)

![](assets/screenshots/Screenshot%202025-08-12%20150806.png)

### Backend 
![](assets/screenshots/Screenshot%202025-08-04%20162200.png)

![](assets/screenshots/Screenshot%202025-08-04%20161724.png)

### Final Results
![](assets/screenshots/Screenshot%202025-08-03%20021438.png)

![](assets/screenshots/Screenshot%202025-08-03%20021510.png)

![](assets/screenshots/Screenshot%202025-08-03%20021621.png)

## License
This project is released under the **Apache 2.0 License**.
