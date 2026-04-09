# 💼 Job Dashboard Tracker

A responsive **Job Dashboard Web Application** that allows users to manage job applications by categorizing them into **Interview** and **Rejected** states with real-time updates.

🔗 **Live Site:** _Add your live link here_  

---

## 📖 Overview

This project is a simple job tracking dashboard where users can view available jobs, mark them as **Interview** or **Rejected**, and manage them dynamically. The dashboard updates counts in real-time and provides a clean UI inspired by Figma design.

---

## 📸 Screenshot

![App Screenshot](./screenshot.png)

---

## 🛠️ Tech Stack

- HTML5  
- CSS3  
- Tailwind CSS  
- JavaScript (ES6)  

---

## ✨ Features

### 📊 Dashboard
- Displays total job statistics  
- Shows:
  - Total Jobs  
  - Interview Count  
  - Rejected Count  

---

### 💼 Available Jobs Section
- Displays at least **8 job cards**
- Each card includes:
  - Company Name  
  - Position  
  - Location  
  - Job Type  
  - Salary  
  - Description  

---

### 🏷️ Tabs System
- **All** → Shows all jobs (default)  
- **Interview** → Shows selected interview jobs  
- **Rejected** → Shows rejected jobs  

- If no jobs available:
  - Shows message: *"No jobs available"*  
  - Includes subtitle and icon/image  

---

### 🔄 Job Actions

#### ✅ Interview Button
- Moves job to **Interview tab**
- Updates job status
- Increases Interview count in dashboard  

#### ❌ Rejected Button
- Moves job to **Rejected tab**
- Updates job status
- Increases Rejected count in dashboard  

#### 🔁 Toggle Feature
- Can switch between **Interview ↔ Rejected**
- Updates:
  - Status  
  - Tab content  
  - Dashboard count  

---

### 🗑️ Delete Functionality
- Removes job card from UI  
- Updates:
  - Dashboard counts  
  - Tab counts  

---

### 📱 Responsive Design
- Fully responsive for mobile devices  
- Clean layout across all screen sizes  

---

## 📦 Dependencies

- Tailwind CSS  

---

## 🚀 Getting Started (Run Locally)

### 1️⃣ Clone the repository
git clone https://github.com/your-username/your-repo-name.git


### 2️⃣ Navigate to project folder

cd your-repo-name


### 3️⃣ Run the project
- Open `index.html` in your browser  
OR  
- Use **Live Server** in VS Code  

---

## 🌐 Live Link

👉 _Add your deployed project link here_

---

## 📌 Project Requirements Covered

- ✅ Responsive dashboard design  
- ✅ Tab-based filtering system  
- ✅ Dynamic job status update  
- ✅ Real-time dashboard count update  
- ✅ Toggle between Interview & Rejected  
- ✅ Delete functionality with state update  
- ✅ Minimum 8 meaningful commits  

---

## 🚧 Future Improvements

- Add backend integration  
- Store data in localStorage/database  
- Add job search & filter  
- Add animations for better UX  

---

## 🙌 Author

**Your Name**  
Frontend Developer  



What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll? ans: getElementById() document.getElementById("id"); -->only chooses by ID -->returns 1 element, if not found anything returns null
getElementsByClassName() document.getElementsByClassName("class"); -->selects by class name -->returns HTML collection --> uses loop

querySelector() document.querySelector("selector"); -->accepts CSS selector -->returns first matching element -->if nothing found, returns null

querySelectorAll() document.querySelectorAll("selector") -->returns nodeList

How do you create and insert a new element into the DOM? ans: To create an Element we use document.createElement(). To insert a new element we use appendChild()

What is Event Bubbling? And how does it work? ans: when we click a child element, the event triggers on its parent, grandparent and so on.

What is Event Delegation in JavaScript? Why is it useful? ans: when we attach a single event listener to a parent element instead of multiple child elements. it is useful because of its better performance. it uses fewer event listners and workd automatically for elements added later.

What is the difference between preventDefault() and stopPropagation() methods? ans: preventDefault() stops the browser’s default behavior for an element. stopPropagation() stops the event from bubbling up.
