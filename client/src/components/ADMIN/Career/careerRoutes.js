import Career from './Career'
import AddJobs from './AddJobs';

const careerRoutes = [
  {
    path: "/admin/career",
    name: "Career",
    sidebarVisible: true,
    Component: Career,
  },
  {
    path: "/admin/jobs/add",
    name: "Add Jobs",
    sidebarVisible: true,
    Component: AddJobs,
  },
]

  
export default careerRoutes;