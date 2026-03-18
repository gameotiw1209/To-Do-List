# 📝 Todo List App

A simple and clean Todo List web application built with HTML, CSS, and vanilla JavaScript. Add tasks, mark them as complete, delete them, and your tasks are saved even after refreshing the page!

---

## ✨ Features

- ✅ Add tasks by clicking the button or pressing **Enter**
- ✔️ Mark tasks as completed (strikethrough effect)
- ❌ Delete individual tasks
- 💾 Tasks saved to **localStorage** — persists after page refresh
- 🚫 Alerts user if they try to add an empty task

---

## 📁 Project Structure

```
todo-list/
│
├── index.html       # Main HTML structure
├── style.css        # Styling for the app
└── script.js        # All JavaScript logic
```

---

## 🚀 How to Run

1. Clone or download the repository
2. Open `index.html` in your browser
3. Start adding tasks!

No installation or dependencies required — pure HTML, CSS, and JS.

---

## 🧠 How It Works

### Adding a Task
- Type in the input box and click **Add Task** or press **Enter**
- A new `<li>` element is created and added to the list
- A delete button `×` is appended to each task

### Completing a Task
- Click on any task to toggle the `checked` class
- CSS applies a strikethrough style when the class is present

### Deleting a Task
- Click the `×` button on any task
- The parent `<li>` element is removed from the DOM

### Saving Data
- Every change (add, complete, delete) calls `saveData()`
- Tasks are saved to `localStorage` as HTML string
- On page load, `showData()` restores tasks from `localStorage`

---

## 💻 Key JavaScript Concepts Used

| Concept | Usage |
|---|---|
| `getElementById` | Grabbing HTML elements |
| `createElement` | Dynamically creating `li` and `span` |
| `appendChild` | Adding elements to the list |
| `addEventListener` | Listening for click and keydown events |
| `classList.toggle` | Marking tasks as complete/incomplete |
| `parentElement.remove()` | Deleting tasks |
| `localStorage` | Persisting tasks across page reloads |
| Event Delegation | Single listener on `ul` handles all task clicks |

---

## 🛠️ Built With

- HTML5
- CSS3
- Vanilla JavaScript (no frameworks or libraries)

---

## 📌 Future Improvements

- [ ] Edit existing tasks
- [ ] Filter by completed / pending
- [ ] Drag and drop to reorder tasks
- [ ] Due dates for tasks
- [ ] Categories or labels
