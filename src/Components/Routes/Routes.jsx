import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Resume_Templates from "../Pages/Resume_Templates/Resume_Templates";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import Job_Posting from "../Pages/Job_Posting/Job_Posting"
import Premium_Membership from "../Pages/Premium_Membership/Premium_Membership";
import Resume_Review from "../Pages/Resume_Review/Resume_Review";
import User_Profile from "../Pages/User_Profile/User_Profile";
import Main from "../../Main/Main";
import PersonalInfoForm from '../../PageWise/PersonalInfoForm'
import CareerObjectiveForm from '../../PageWise/CareerObjectiveForm'
import SkillsForm from '../../PageWise/SkillsForm'
import ProjectsForm from '../../PageWise/ProjectsForm'
import EducationForm from '../../PageWise/EducationForm'
import LanguagesForm from '../../PageWise/LanguagesForm'
import TemplateForm from '../../PageWise/TemplateForm'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/resume-templates',
        element: <Main></Main>,  // Main component contains <Outlet />
        children: [
          {
            path: "template-form",  // Notice no leading "/"
            element: <TemplateForm/>,
          },
          {
            path: "personal-info-form",  // Notice no leading "/"
            element: <PersonalInfoForm></PersonalInfoForm>,
          },
          {
            path: "career-objective-form", // Add the new route here
            element: <CareerObjectiveForm />,
          },
          {
            path: "skills-form", // Add the new route here
            element: <SkillsForm />,
          },
          {
            path: "peronal-project", // Add the new route here
            element: <ProjectsForm />,
          },
          {
            path: "Education-form", // Add the new route here
            element: <EducationForm />,
          },
          {
            path: "Languages-form", // Add the new route here
            element: <LanguagesForm />,
          },
        ],
      },
      {
        path: '/job-posting',
        element: <Job_Posting></Job_Posting>
      },
      {
        path: '/premium-membership',
        element:<Premium_Membership></Premium_Membership>
      },
      {
        path: '/resume-review',
        element:<Resume_Review></Resume_Review>
      },
      {
        path: '/user-profile',
        element:<User_Profile></User_Profile>
      },
      {
        path: '/signin',
        element: <SignIn></SignIn>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
    ]
  },
]);


export default router;