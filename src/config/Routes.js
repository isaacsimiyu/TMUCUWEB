
import Header from "../components/header/Header";
import Home from "../pages/Home/Home";
import Blogs from "../pages/blog/Blogs";
import Events from "../pages/events/Events";
import Gallery from "../pages/gallery/Gallery";
import Programs from "../pages/programs/Programs";
import ContactUs from "../pages/contact/ContactUs";
import Leadership from "../pages/aboutus/leadership/Leadership";
import Membership from "../pages/aboutus/membership/Membership";
import RegistrationForm from "../components/Registration/RegistrationForm";
import Media from "../pages/ministries/mediaandpublicity/Media";
import MediaReg from "../pages/ministries/ministriesreg/media/MediaReg";
import Admin from "../components/admin/Admin";
import PostDetails from "../pages/blog/posts/PostDetails";
import AboutUs from "../pages/aboutus/tmu/Aboutus";
import Users from "../components/admin/adminpages/users/Users";
import Contacts from "../components/admin/adminpages/contacts/Contacts ";
import Subscribers from "../components/admin/adminpages/subscribers/Subscribers";
import LoginForm from "../components/Login/LoginForm";
export const routes = [
  {
    path: "/header",
    element: <Header />,
    isPrivate: false,
  },

  {
    path: "/*",
    element: <Home />,
    isPrivate: false,
  },

  {
    path: "/pages/events",
    element: <Events />,
    isPrivate: false,
  },
  {
    path: "/pages/programs",
    element: <Programs />,
    isPrivate: false,
  },
  {
    path: "/pages/gallery",
    element: <Gallery />,
    isPrivate: false,
  },
  {
    path: "/pages/blogs",
    element: <Blogs />,
    isPrivate: false,
  },
  {
    path: "/pages/contact",
    element: <ContactUs />,
    isPrivate: false,
  },
  {
    path: "/aboutus/leadership",
    element: <Leadership />,
    isPrivate: false,
  },
  {
    path: "/aboutus/membership",
    element: <Membership />,
    isPrivate: false,
  },
  {
    path: "/components/Registration",
    element: <RegistrationForm />,
    isPrivate: false,
  },
  {
    path: "/ministries/mediaandpublicity",
    element: <Media />,
    isPrivate: false,
  },
  {
    path: "/ministriesreg/media",
    element: <MediaReg />,
    isPrivate: false,
  },
  {
    path: "/blog/posts",
    element: <PostDetails />,
    isPrivate: false,
  },
  {
    path: "/admin",
    element: <Admin />,
    isPrivate: true,
  },
  {
    path: "/aboutus",
    element: <AboutUs />,
    isPrivate: true,
  },
  {
    path: "/dashboard",
    element: <Admin />,
    isPrivate: true,
  },
  {
    path: "/users",
    element: <Users />,
    isPrivate: true,
  },
  {
    path: "/contacts",
    element: <Contacts />,
    isPrivate: true,
  },
  {
    path: "/subscribers",
    element: <Subscribers />,
    isPrivate: true,
  },
  {
    path: "/login",
    element: <LoginForm />,
    isPrivate: true,
  },
 
 
];