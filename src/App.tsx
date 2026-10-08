import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { MainLayout } from "./layouts/MainLayout";
import { AboutPage } from "./pages/About/AboutPage";
import { HomePage } from "./pages/Home/HomePage";
import { JobDetailsPage } from "./pages/JobDetails/JobDetailsPage";
import { NotFoundPage } from "./pages/NotFound/NotFoundPage";
import { SavedJobsPage } from "./pages/SavedJobs/SavedJobsPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="saved" element={<SavedJobsPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="job/:id" element={<JobDetailsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
