import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ForumChat from "./pages/ForumChat";
import ProfilePage from "./pages/ProfilePage";
import Social3 from "./pages/Social3";
import LandingPageforums from "./pages/LandingPageforums";
import AddGoals from "./pages/AddGoals";
import MyGoals from "./pages/MyGoals";
import { useEffect } from "react";
import Chatbox from "./pages/Chatbox";
import Whiteboard from "./pages/Whiteboard";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/profile-page":
        title = "";
        metaDescription = "";
        break;
      case "/social-3":
        title = "";
        metaDescription = "";
        break;
      case "/landing-pageforums":
        title = "";
        metaDescription = "";
        break;
      case "/add-goals":
        title = "";
        metaDescription = "";
        break;
      case "/my-goals":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/landing-pageforums" element={<LandingPageforums />} />
      <Route path="/" element={<ForumChat />} />
      <Route path="/profile-page" element={<ProfilePage />} />
      <Route path="/social-3" element={<Social3 />} />
      
      <Route path="/add-goals" element={<AddGoals />} />
      <Route path="/my-goals" element={<MyGoals />} />
      <Route path="/chat" element={<Chatbox />} />
    </Routes>
  );
}
export default App;
