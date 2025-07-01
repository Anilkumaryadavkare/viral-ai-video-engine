# Viral AI Video Engine 🎬🤖

An end-to-end AI agent that automates the entire Instagram Reels content pipeline — from trend discovery to video generation, quality scoring, scheduling, and analytics — all powered by cutting-edge AI.

🌐 Live Demo: [viral-ai-video-engine.netlify.app](https://viral-ai-video-engine.netlify.app)

---

## 🚀 Features

### ✅ Core Modules:
- **Viral Content Discovery**  
  Scrapes trending Instagram Reels and analyzes why they go viral using GPT-4V and custom heuristics.

- **AI-Powered Video Generator**  
  Uses Replicate (Stable Diffusion Video / PikaLabs) to generate 5–15s videos aligned with current trends.

- **Quality Scoring System**  
  Videos are auto-evaluated and filtered using GPT-4 Vision. Only high-quality (7+/10) content gets published.

- **Auto Scheduler**  
  Seamlessly schedules posts via Meta Graph API. Supports time A/B testing and 30-day content recycling.

- **Performance Analytics Dashboard**  
  Real-time engagement metrics, video scoring history, calendar view, and trend feedback loop.

---

## 🎨 UI Design Highlights

- Glassmorphism design with gradient themes (purple → blue)
- Fully responsive layout (desktop + mobile)
- Micro-interactions and hover effects
- Animated loading states and data visualizations
- Calendar integration and post preview system

---

## ⚙️ Tech Stack

| Layer         | Tool/Tech                     |
|---------------|-------------------------------|
| Frontend      | React, TailwindCSS, Framer Motion |
| Backend       | FastAPI (planned), Bolt.new (agent logic) |
| AI Models     | GPT-4 Vision, Replicate SDXL Video, WhisperX |
| Audio API     | Uppbeat (royalty-free music) |
| Scheduler     | Meta Graph API (Instagram Reels Publishing) |
| DB/Storage    | Supabase / Firebase           |
| Hosting       | Netlify                       |

---

## 📁 Project Structure


---

## 🧠 How It Works

1. Scrapes viral Reels and extracts metadata
2. Analyzes patterns with GPT-4 Vision
3. Generates new content using AI video models
4. Filters low-quality outputs
5. Schedules high-quality videos via Instagram API
6. Tracks engagement and refines future generations

---

## 📌 Status

- [x] MVP live at [Netlify demo](https://viral-ai-video-engine.netlify.app)
- [x] 5 core modules built
- [ ] Backend agent automation (Bolt, FastAPI)
- [ ] Multi-platform support (YouTube Shorts, TikTok)
- [ ] User-auth and API key protection (coming soon)

---

## 📬 Contact / Collaborate

Built by [@AnilKumarYadav](https://github.com/Anilkumaryadavkare)  
Feel free to fork, star ⭐, or open issues/PRs.

Want to contribute or integrate this agent into your stack? Drop a DM or raise an issue.

---

## 📝 License

MIT License
