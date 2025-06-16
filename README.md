# Mini Job Board

Welcome to **Mini Job Board**! This is an interactive, modern job board web application built with React, Redux Toolkit, and a fully tested JavaScript stack. Whether you’re a developer looking for your next gig or a company looking to hire, this project is both a demonstration of best practices and a great starting point for your own job board ideas.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm start

# 3. Run tests (with coverage)
npm run test:coverage
```

Then visit [http://localhost:3000](http://localhost:3000) in your browser!

---

## 🧭 Features

- **Browse Jobs:** See a list of 100+ realistic jobs with filtering by company and job type.
- **Search:** Instantly search job titles with the search bar.
- **Job Details Modal:** Click a job to view full details and requirements in a modal.
- **Apply Link:** Go straight to the company’s application page.
- **Redux State Management:** All jobs and filters are managed using Redux Toolkit.
- **Pagination & Infinite Scroll:** Load more jobs as you scroll.
- **Responsive UI:** Works on desktop and mobile.
- **Full Test Coverage:** All components, store slices, and data are covered by unit tests.

---

## 🗂️ Project Structure

```
mini-job-board/
├── public/
├── src/
│   ├── components/
│   │   ├── JobCard/
│   │   ├── JobDetails/
│   │   ├── JobList/
│   │   └── SearchBar/
│   ├── store/
│   │   ├── data/jobs.js
│   │   └── features/jobs/jobsSlice.js
│   ├── App.js
│   └── ...
├── package.json
├── README.md
└── ...
```

---

## 🛠️ How It Works (Interactive Walkthrough)

1. **Landing Page:**
   - You’re greeted with a header and a search bar.
   - Type in the search bar to filter job titles instantly.

2. **Filtering:**
   - Use the dropdowns to filter jobs by company or job type.
   - Click “Clear Filters” to reset all filters.

3. **Job List:**
   - Scroll to load more jobs (infinite scroll).
   - Click any job card to open a modal with full job details.

4. **Job Details Modal:**
   - Read the full description and requirements.
   - Click “Apply Now” to go to the company’s application page.
   - Click the close button or outside the modal to return to the list.

5. **Testing:**
   - Run `npm run test:coverage` to see detailed test coverage reports.
   - All logic, reducers, selectors, and UI interactions are tested.

---

## 🧪 Testing & Coverage

- **Run all tests:**
  ```bash
  npm test
  # or for full coverage
  npm run test:coverage
  ```
- **What’s covered?**
  - All React components (rendering, events, edge cases)
  - Redux slices, reducers, and selectors
  - Async thunks and state transitions
  - Static job data (structure, uniqueness)

---

## 🤖 Tech Stack

- **React** (with functional components & hooks)
- **Redux Toolkit** (state management)
- **Jest** & **React Testing Library** (testing)
- **Babel** (JSX & ES6+ support)
- **Modern CSS** (responsive, accessible UI)

---

## 📝 Customization

- **Adding Jobs:**
  - Edit `src/store/data/jobs.js` to add or modify job entries.
- **Styling:**
  - Tweak CSS files in `src/components/` for your own look & feel.
- **Deployment:**
  - Build with `npm run build` and deploy to any static host (Netlify, Vercel, GitHub Pages, etc).

---

## 💡 Tips & Best Practices

- Use the search and filters together for precise job hunting.
- All code is modular—feel free to swap out Redux for another state manager, or add backend integration.
- Tests are a great reference for how components and store logic are expected to behave.

---

## 🙋 FAQ

**Q: Can I use this as a starter for my own job board?**
- Absolutely! Just customize the data, styles, and add authentication or backend as needed.

**Q: How do I add more tests?**
- See the `*.test.js` files for patterns. Use [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) and [Jest](https://jestjs.io/docs/getting-started).

**Q: How do I deploy?**
- Run `npm run build` and deploy the `build/` directory to your favorite static host.

---

## 📬 Feedback & Contributions

Have ideas or want to contribute? Open an issue or pull request on [GitHub](https://github.com/shashwathuchil/mini-job-board)!

---

Enjoy using **Mini Job Board** and happy job hunting! 🎉
