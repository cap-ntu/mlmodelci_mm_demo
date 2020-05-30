import BasicLayout from '@/layouts/BasicLayout';
import Dashboard from '@/pages/Dashboard';
import MRCNN from '@/pages/MRCNN';
import Setting from '@/pages/Setting';
import BERT from '@/pages/BERT';

const routerConfig = [
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '/',
        exact: true,
        component: Dashboard,
      },
      {
        path: '/mrcnn',
        component: MRCNN,
      },
      {
        path: '/bert',
        component: BERT,
      },
      {
        path: '/setting',
        component: Setting,
      },
    ],
  },
];
export default routerConfig;
