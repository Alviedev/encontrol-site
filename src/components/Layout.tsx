import { useLocation, useOutlet } from "react-router-dom";
import { AnimatePresence, MotionConfig } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import PageTransition from "./PageTransition";

function Layout() {
  const { pathname } = useLocation();
  const outlet = useOutlet();

  return (
    <MotionConfig reducedMotion="user">
      <Header />
      <main>
        <AnimatePresence
          mode="wait"
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <PageTransition key={pathname}>{outlet}</PageTransition>
        </AnimatePresence>
      </main>
      <Footer />
    </MotionConfig>
  );
}

export default Layout;
