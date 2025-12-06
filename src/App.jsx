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
          <Route path="/" element={<TodoList />} />
          <Route path="/eventfunction" element={<EventFunction />} />
          <Route path="/props" element={<Parent user={userName} />} />
          <Route path="/event" element={<ParentEvent />} />
          <Route path="/checkboxes" element={<HandleCheckBox />} />
          <Route path="/radiobuttons" element={<RadioButtonHandle />} />
          <Route path="/projects" element={<WtachPropsP />} />
          <Route path="/loops" element={<NestedLoop />} />
          <Route path="/hooks" element={<Hooks />} />
          <Route path="/api" element={<FetchApi />} />
          <Route path="/states" element={<UseState />} />
          <Route path="/contextapi" element={<College />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </ContextApi>
  );
}

export default App;
