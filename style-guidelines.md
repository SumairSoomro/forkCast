# Forkcast UI/UX Design and Style Guidelines

📅 Milestone 1 – COMPSCI 426: Scalable Web Systems  

---

## 🎨 1. Color Scheme

Forkcast uses a clean and inviting color palette:

| Use Case         | Color Name       | Hex        | Tailwind Class       |
|------------------|------------------|------------|-----------------------|
| Primary Accent   | Emerald Green    | `#10B981`  | `text-primary-green` |
| Background       | Light Gray       | `#F9FAFB`  | `bg-gray-50`         |
| Section Bg       | Medium Gray      | `#F3F4F6`  | `bg-gray-100`        |
| Headings         | Dark Gray        | `#111827`  | `text-gray-900`      |
| Body Text        | Slate Gray       | `#6B7280`  | `text-gray-600`      |
| Button Primary   | Indigo           | `#4F46E5`  | `bg-indigo-600`      |

---

## 🔤 2. Typography

| Element     | Font Family     | Font Size     | Tailwind Class  |
|-------------|------------------|---------------|------------------|
| Hero Title  | Inter / Bold     | `text-5xl`    | `font-extrabold` |
| Section H2  | Inter / Semibold | `text-3xl`    | `font-semibold`  |
| Paragraph   | Inter / Regular  | `text-base`   | `font-normal`    |
| Subtext     | Inter / Light    | `text-sm`     | `text-gray-600`  |

Typography is responsive and left-aligned. Max content width: `max-w-2xl`.

---

## 📐 3. Spacing & Layout

- Section padding: `py-16 px-4`
- Max width: `container mx-auto`
- Use `space-y-6` for vertical spacing
- Grid layout: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
- Card layout: `p-6 rounded-lg shadow-md`

---

## 🧩 4. Component Behavior

### Hover Effects
- **Navbar links:** `hover:text-primary-green`
- **Buttons:** `hover:bg-indigo-700 transition-colors`
- **Cards:** `hover:shadow-xl`

### Transitions & Animations
- All interactive components use: `transition-all duration-200 ease-in-out`
- Section animations: `animate-fade-in` (applied to hero and trending sections)

---

## ♿ 5. Accessibility Standards

Forkcast aims for **WCAG 2.1 AA** compliance:

- ✅ High contrast between text and background
- ✅ Keyboard accessible buttons and forms
- ✅ All images include descriptive `alt` text
- ✅ Semantic HTML (`<main>`, `<section>`, `<nav>`, `<footer>`)
- ✅ Clear focus styles for form inputs and links

---

## 📱 6. Responsive Design

Forkcast uses Tailwind’s mobile-first breakpoints:

| Breakpoint | Prefix | Example                |
|------------|--------|------------------------|
| Small      | `sm:`  | `sm:text-lg`           |
| Medium     | `md:`  | `md:grid-cols-2`       |
| Large      | `lg:`  | `lg:flex-row`          |
| Extra-Large| `xl:`  | `xl:justify-between`   |

- **Navbar:** transforms into stacked menu at small screens
- **Layout components:** shift from column to grid/row views at `md`+

---

## 🔧 7. UI Component Guidelines

| Component      | Tailwind Classes Example                                                                 |
|----------------|-------------------------------------------------------------------------------------------|
| **Navbar**     | `flex items-center justify-between p-4 bg-white shadow`                                  |
| **CTA Button** | `bg-indigo-600 text-white px-5 py-3 rounded-lg font-medium hover:bg-indigo-700`          |
| **Card**       | `rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 p-4`       |
| **Hero Section** | `text-center py-20 bg-white animate-fade-in`                                           |
| **Footer**     | `text-sm text-gray-400 text-center py-6`                                                 |

---

## 📚 8. Design References

Forkcast’s design system draws inspiration from:

- [✅ Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)
- [✅ Google Material Design](https://m3.material.io/)
- [✅ IBM Carbon Design System](https://carbondesignsystem.com/)
- [✅ Microsoft Fluent UI](https://developer.microsoft.com/en-us/fluentui/)
- [✅ TailwindCSS Docs](https://tailwindcss.com/docs)

---

## ✅ Summary

This document standardizes Forkcast’s UI appearance and interactions.  
It ensures consistent visual language, accessibility, and responsive behavior across all components.  
All team members should reference this file when building, reviewing, or refactoring UI features.
