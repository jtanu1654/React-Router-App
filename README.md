# React Router App

A modern, responsive e-commerce application built with React Router DOM and Tailwind CSS. This single-page application (SPA) demonstrates client-side routing with a beautiful, professional UI.

## 🚀 Features

- **Modern React 19.1.1** with latest features and hooks
- **Client-side Routing** with React Router DOM v7.8.2
- **Responsive Design** built with Tailwind CSS v3.4.0
- **Professional UI/UX** with custom color scheme
- **Product Catalog** with detailed product pages
- **Contact Form** with validation and submission handling
- **404 Error Handling** with helpful navigation options
- **Fast Development** with Vite build tool

## 📦 Application Demo
See the application demo here - [React Router App]()

## 📋 Pages & Components

### Core Pages
- **Home** (`/`) - Landing page with hero section and feature highlights
- **Products** (`/products`) - Product catalog with filtering options
- **Product Detail** (`/products/:id`) - Detailed product information with specs
- **About** (`/about`) - Company information and team details
- **Contact** (`/contact`) - Contact form with business information
- **404** (`*`) - Custom error page with navigation options

### Key Features
- **Navigation** - Clean, responsive navigation bar
- **Product Grid** - Responsive product cards with hover effects
- **Breadcrumb Navigation** - User-friendly navigation paths
- **Form Validation** - Contact form with proper validation
- **Loading States** - Form submission feedback
- **Error Boundaries** - Graceful error handling

## 🛠️ Technology Stack

- **Frontend Framework:** React 19.1.1
- **Routing:** React Router DOM 7.8.2
- **Styling:** Tailwind CSS 3.4.0
- **Build Tool:** Vite 7.1.3
- **Package Manager:** npm
- **Development Server:** Vite Dev Server

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the URL shown in terminal)

## 🏗️ Project Structure

```
app/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── Home.jsx       # Landing page
│   │   ├── Products.jsx   # Product catalog
│   │   ├── ProductDetail.jsx # Product details
│   │   ├── About.jsx      # About page
│   │   ├── Contact.jsx    # Contact form
│   │   └── NotFound.jsx   # 404 error page
│   ├── App.jsx            # Main app component with routing
│   ├── main.jsx           # App entry point
│   ├── index.css          # Global styles with Tailwind
│   └── App.css            # App-specific styles
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
├── vite.config.js         # Vite build configuration
├── package.json           # Dependencies and scripts
└── README.md             # This file
```

## 🎨 Styling

The application uses **Tailwind CSS** with a custom color palette:

- **Primary Colors:** Blue scale (50-900)
- **Responsive Design:** Mobile-first approach
- **Custom Components:** Consistent design system
- **Hover Effects:** Smooth transitions and interactions

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Responsive Design

The application is fully responsive and works on:
- **Desktop** - Full navigation and layout
- **Tablet** - Optimized grid layouts
- **Mobile** - Collapsible navigation and touch-friendly interface

## 🛍️ Product Features

### Product Catalog
- 6 sample products across different categories
- Product cards with images, prices, and descriptions
- Category filtering (UI ready for functionality)
- "View Details" navigation to individual products

### Product Details
- Comprehensive product information
- Specifications and features lists
- Stock status indicators
- Rating and review display
- Add to cart and wishlist buttons

## 📞 Contact Features

- **Contact Form** with validation
- **Business Information** display
- **Form Submission** with loading states
- **Success Feedback** after submission
- **Business Hours** and contact details

## 🚀 Deployment

The application is ready for deployment to various platforms:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your preferred hosting service:
   - Vercel
   - Netlify
   - GitHub Pages
   - AWS S3
   - Any static hosting service

## 🔮 Future Enhancements

- [ ] API integration for dynamic product data
- [ ] Shopping cart functionality
- [ ] User authentication
- [ ] Product search functionality
- [ ] Payment processing integration
- [ ] Admin dashboard
- [ ] Product reviews and ratings
- [ ] Wishlist functionality

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


**Note:** This is a demo application showcasing React Router and modern web development practices. Product data is currently static and for demonstration purposes only.
