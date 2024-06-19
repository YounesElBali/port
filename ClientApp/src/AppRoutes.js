import Home from './pages/Home';
import Login from './pages/login';
import Contact from './components/Contact/Contact';
import Donate from './components/Donate/DonatePage';
import DonateMonthly from './components/Donate/DonateMonthly';
import DonateSingle from './components/Donate/DonateSingle';
import PageList from './components/Markdown/PageList';
import PagePreview from './components/Markdown/PagePreview';
import PageEditor from './components/Markdown/PageEditor';
import BatchGenerator from './components/BatchGenerator/BatchGenerator';
import AuthorizeView from './components/Authentication/AuthorizeView';
import PrayerTime from './components/PrayerTime/PrayerTime';
import Revert from './components/Revert/Revert';
import Student from './components/Student/Student';
import LogoutLink from './components/Authentication/LogoutLink';

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/donatie',
    element: <Donate />
  },
  {
    path: '/enkeldonatie',
    element: <DonateSingle />
  },
  {
    path: '/maandelijksedonatie',
    element: <DonateMonthly />
  },
  {
    path: '/vrijdagpreken',
    element: <PageList />
  },
  {
    path: '/preview/:pageName',
    element: <PagePreview />
  },
  {
    path: '/pagina/edit',
    element: <PageEditor />
  },
  {
    path: '/gebedstijden',
    element: <PrayerTime />
  },
  {
    path: '/meerLeren',
    element: <Revert />
  },
  {
    path: '/student',
    element: <Student />
  },
  {
    path: '/logout',
    element: <LogoutLink />
  }
];

export default AppRoutes;
