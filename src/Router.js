import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import QuestionPage from "./pages/practice/QuestionPage";
import BaseLayout from "./layout/BaseLayout";
export default function Router() {
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route path="/" element={<QuestionPage />} />
      </Route>
    </Routes>
  );
}
