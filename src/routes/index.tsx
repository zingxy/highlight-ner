import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../components/Layout'
import SigleTextInput from '../pages/SigleTextInput'
import SiglePMID from '../pages/SiglePMID'
import BatchInput from '../pages/BatchInput'
import SelectModel from '../pages/SelectModel'
import Result from '../pages/Result'
import ResultList from '../pages/ResultList'
import Backend from '../pages/Backend'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        path: '/',
        element: <SigleTextInput />,
      },
      {
        path: 'sigle-pmid',
        element: <SiglePMID />,
      },
      {
        path: 'batch',
        element: <BatchInput />,
      },
      {
        path: 'models',
        element: <SelectModel />,
      },
      {
        path: 'result',
        element: <Result />,
      },
      {
        path: 'results',
        element: <ResultList />,
      },
    ],
  },
  {
    path: 'backend',
    element: <Backend />,
  },
])

export default router
