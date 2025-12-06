import "./App.css";
import TodoList from "./component/TodoList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EventFunction from "./component/EventFunction";
import Parent from "./topics/PropsTopics/Parent";
import ParentEvent from "./topics/EventsTopics/ParentEvent";
import HandleCheckBox from "./topics/HandleCheckBoxes/HandleCheckBox";
import RadioButtonHandle from "./topics/RadioButton/RadioButtonHandle";
import WtachPropsP from "./topics/Projects/WtachPropsP";
import Hooks from "./topics/Hooks/Hooks";
import NestedLoop from "./topics/Loop/NestedLoop";
import FetchApi from "./topics/Api/FetchApi";
import UseState from "./topics/StateTopics/UseState";
import College from "./topics/ContexApi/College";
import ContextApi from "./topics/ContexApi/ContextApi";
import PageNotFound from "./topics/PageNotFound/PageNotFound";

function App() {
  const userName = "Sam Bahadur";

  return (
    <ContextApi>
      <BrowserRouter>
        <Routes>
          <Route path="/react-course/" element={<TodoList />} />
          <Route
            path="/react-course/eventfunction"
            element={<EventFunction />}
          />
          <Route
            path="/react-course/props"
            element={<Parent user={userName} />}
          />
          <Route path="/react-course/event" element={<ParentEvent />} />
          <Route path="/react-course/checkboxes" element={<HandleCheckBox />} />
          <Route
            path="/react-course/radiobuttons"
            element={<RadioButtonHandle />}
          />
          <Route path="/react-course/projects" element={<WtachPropsP />} />
          <Route path="/react-course/loops" element={<NestedLoop />} />
          <Route path="/react-course/hooks" element={<Hooks />} />
          <Route path="/react-course/api" element={<FetchApi />} />
          <Route path="/react-course/states" element={<UseState />} />
          <Route path="/react-course/contextapi" element={<College />} />
          <Route path="/react-course/*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </ContextApi>
  );
}

export default App;
