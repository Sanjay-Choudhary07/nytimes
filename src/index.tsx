import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CountryArticle from './components/countryarticle/countryArticle';
import MoreDispatches from './components/moredispatches/moreDispatches';
import CountryNews from './components/countrynews/countryNews';
import ArticleDetail from './components/articledetails/articleDetails';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />
    },
    {
      path: "/Dispatches",
      element: <MoreDispatches text={"Dispatches"} />
    },
    {
      path: "/The Saturday Profile",
      element: <MoreDispatches text={"The Saturday Profile"} />
    }, {
      path: "/country/:countryname",
      element: <CountryNews />
    }, {
      path: "/article/:index",
      element: <ArticleDetail />
    },
    {
      path: '/country/:countryname/article/:articleId',
      element: <CountryArticle />
    }
  ])



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

