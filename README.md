# TaskFlow - Modern Todo Application

A beautiful and feature-rich todo application built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- ✨ Beautiful, modern UI with smooth animations
- 📱 Fully responsive design
- 🎯 Task categorization (Work, Personal, Shopping, Other)
- 📅 Due date support
- 🔄 Drag and drop reordering
- 🎨 Clean and intuitive interface
- 💾 Local storage persistence
- 🌓 Light/Dark mode support

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

- Add new tasks with the "Add new task" button
- Set task categories and due dates
- Mark tasks as complete by clicking the checkbox
- Edit or delete tasks using the action buttons
- Filter tasks by status (All, Active, Completed)
- Drag and drop to reorder tasks
- Data persists in local storage

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Lucide React](https://lucide.dev/) - Icons
- [React Hook Form](https://react-hook-form.com/) - Form handling
- [Zod](https://zod.dev/) - Form validation
- [date-fns](https://date-fns.org/) - Date formatting
- [shadcn/ui](https://ui.shadcn.com/) - UI components

## Project Structure

```
├── app/                 # Next.js app directory
├── components/         
│   ├── todo/           # Todo-specific components
│   └── ui/             # Reusable UI components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and types
└── public/             # Static assets
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
