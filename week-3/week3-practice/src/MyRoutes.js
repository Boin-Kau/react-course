import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Course from './pages/Course';
import CourseDetail from './pages/CourseDetail';
import Home from './pages/Home'
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import Result from './pages/Result';
import Roadmaps from './pages/Roadmaps';

export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/courses" element={<Course />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/result" element={<Result />} />
        <Route path="/roadmaps" element={<Roadmaps />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
