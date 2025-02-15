# 🚀 Code Snippet Manager  

A **modern and stylish** Next.js web application for managing and sharing code snippets efficiently.  
This project allows users to **create, edit, delete, and view** code snippets with a sleek UI and syntax highlighting.  

---

## ✨ Features  
✅ **Create & Store Snippets** – Save your favorite code snippets easily.  
✅ **Edit & Update Snippets** – Modify snippets with a built-in **Monaco code editor**.  
✅ **Delete Snippets** – Remove unwanted snippets securely.  
✅ **View Snippets** – Browse and explore saved snippets in a **beautiful UI**.  
✅ **Syntax Highlighting** – Snippets are displayed with proper **code formatting**.  
✅ **Modern UI** – Styled using **Tailwind CSS** and **Glassmorphism design**.  

---

## 🛠️ Tech Stack  
🔹 **Frontend:** Next.js, React, Tailwind CSS  
🔹 **Backend:** Next.js API Routes, Prisma ORM  
🔹 **Database:** PostgreSQL / SQLite (Prisma)  
🔹 **Editor:** Monaco Editor  
🔹 **Syntax Highlighting:** React Syntax Highlighter  

---

## 🚀 Installation & Setup  
Follow these steps to **run the project locally**:  

### **1️⃣ Clone the Repository**  
```bash
git clone https://github.com/your-username/code-snippet-manager.git
cd code-snippet-manager
📂 code-snippet-manager
├── 📁 app
│   ├── 📄 page.tsx            # Home page (Lists snippets)
│   ├── 📁 snippet
│   │   ├── 📄 new.tsx          # Create new snippet
│   │   ├── 📄 [id].tsx         # Snippet details page
│   │   ├── 📄 [id]/edit.tsx    # Edit snippet page
├── 📁 components
│   ├── 📄 EditPageSnippetForm.tsx
├── 📁 lib
│   ├── 📄 prisma.ts           # Prisma client
├── 📁 actions
│   ├── 📄 saveSnippet.ts      # Server action for saving snippets
├── 📄 layout.tsx              # Main layout
├── 📄 tailwind.config.js      # Tailwind configuration
├── 📄 next.config.js          # Next.js configuration
