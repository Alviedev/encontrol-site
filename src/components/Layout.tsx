import { useLocation, useOutlet } from "react-router-dom";
import { AnimatePresence, MotionConfig } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import PageTransition from "./PageTransition";
import RecentAdditions from "./RecentAdditions";

function Layout() {
  const { pathname } = useLocation();
  const outlet = useOutlet();

  return (
    <MotionConfig reducedMotion="user">
      <Header />
      <main>
        {/* No fade-in on first load: the page is already there, pre-rendered */}
        <AnimatePresence
          initial={false}
          mode="wait"
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <PageTransition key={pathname}>{outlet}</PageTransition>
        </AnimatePresence>
      </main>
      <Footer />
      {import.meta.env.DEV && <RecentAdditions />}
    </MotionConfig>
  );
}

export default Layout;
