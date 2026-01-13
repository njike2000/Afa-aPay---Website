import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n/config';
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Product from "./pages/Product";
import Blog from "./pages/Blog";
import Demo from "./pages/Demo";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/product/:slug" component={Product} />
      <Route path="/blog" component={Blog} />
      <Route path="/demo" component={Demo} />
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <ErrorBoundary>
        <ThemeProvider
          defaultTheme="light"
          // switchable
        >
          <TooltipProvider>
            <Router />
          </TooltipProvider>
        </ThemeProvider>
      </ErrorBoundary>
    </I18nextProvider>
  );
}

export default App;
