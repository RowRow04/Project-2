import { Navigate, Route, Routes } from "react-router-dom";
import { Auth, UnAuth } from "../validateAuth";
import { useUserAuthStore } from "../../store/user/useAuth";
// import { Dashboard, Login } from "../../pages/admin";

import { Home, Login, Registration } from "../../pages/home";

//Auth
import {
  AfterLoginEvent,
  CardLayout,
  AttendeeForm,
  EventCheckout,
  PaymentForm,
  SurveyForm,
  TestSurvey,
  TestSurveyCard,
  EventContent,
  PricesForm,
  SeminarCheckout,
  TesterLayout,
  MyProfile,
  TicketCardLayout,
  TicketCardTemplate,
  TicketTabs,
} from "../../pages/visitors/authenticated";

//TestPage
import TestPage from "../../pages/TestPage";

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to={"/"} />} />
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/testPage" element={<TestPage />} />

      <Route element={<UnAuth store={useUserAuthStore} redirect={"/"} />}>
        <Route path="/registration" element={<null />} />
        <Route path="/login" element={<Login />} />
      </Route>

      <Route element={<Auth store={useUserAuthStore} redirect="/events" />}>
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/EventCheckout" element={<EventCheckout />} />
        <Route path="/SeminarCheckout" element={<SeminarCheckout />} />
        {/* tester */}
        <Route path="/tester" element={<TesterLayout />} />
        <Route path="/attendee" element={<AttendeeForm />} />
        <Route path="/survey" element={<SurveyForm />} />
        <Route path="/testsurvey" element={<TestSurvey />} />
        <Route path="/testsurveycard" element={<TestSurveyCard />} />
        <Route path="/cardtemplate" element={<CardLayout />} />
        <Route path="/prices" element={<PricesForm />} />
        <Route path="/payment" element={<PaymentForm />} />
        <Route path="/ticketcard" element={<TicketCardLayout />} />
        <Route path="/ticketlayout" element={<TicketCardTemplate />} />
        <Route element={<AfterLoginEvent />}>
          <Route path="/events" element={<EventContent />} />
          <Route path="/tickets" element={<TicketTabs />} />

          {/* <Route path="/profile" element={<MyProfile />} /> */}
        </Route>
      </Route>
    </Routes>
  );
};

export default UserRoutes;
