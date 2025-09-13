# Portfolio Site - FSD Architecture with Next.js

This project follows the Feature-Sliced Design (FSD) architecture pattern adapted for Next.js App Router.

## Architecture

```
src/
├── app/                    # Next.js App Router (routes only)
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page route
│   ├── globals.css       # Global styles
│   └── providers/        # App-level providers
│
├── shared/                # Shared utilities and UI components
│   ├── ui/               # Reusable UI components
│   ├── lib/              # Utility functions
│   └── hooks/            # Custom hooks
│
├── entities/              # Business entities
│   ├── user/             # User-related data and types
│   └── project/          # Project-related data and types
│
├── features/              # Feature-specific components
│   ├── navigation/       # Navigation feature
│   ├── hero/            # Hero section feature
│   ├── experience/      # Experience section feature
│   ├── projects/        # Projects section feature
│   └── about/           # About section feature
│
├── widgets/               # Composite UI blocks
│   └── header/          # Header widget
│
└── views/                 # Page compositions (replaces pages layer)
    └── home/            # Home page composition
```

## FSD Layers Explanation

1. **app/**: Next.js App Router specific files (routes, layouts, providers)
2. **shared/**: Reusable code across the entire application
3. **entities/**: Business logic and data models
4. **features/**: Isolated feature implementations
5. **widgets/**: Complex UI blocks composed of features
6. **views/**: Page-level component compositions

## Next.js Adaptations

- **views/** replaces traditional FSD **pages/** layer to avoid conflicts with Next.js App Router
- **app/** directory contains only Next.js routing files
- All page compositions are in **views/** and imported into **app/** routes
- Providers are organized in **app/providers/** for app-level concerns

## Performance Optimizations

- All components are memoized with `React.memo()`
- Custom hooks for state management
- Optimized imports with barrel exports
- Separated concerns for better tree-shaking

## Import Rules

```typescript
// ❌ Wrong: Lower layer importing from higher layer
import { HomePage } from "@/views/home"; // from features

// ✅ Correct: Higher layer importing from lower layers
import { HeroSection } from "@/features/hero"; // from views
import { cn } from "@/shared/lib"; // from features
```

## Development

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run linting
```