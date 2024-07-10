import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import QuestionPage from "./pages/practice/QuestionPage";
import BaseLayout from "./layout/BaseLayout";
import HomePage from "./pages/HomePage";
import TestCard from "./components/test/TestCard";
export default function Router() {
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/practice" element={<QuestionPage />} />
        <Route path="/test" element={<TestCard />} />
      </Route>
    </Routes>
  );
}
