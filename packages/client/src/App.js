import './App.css';
import Dashboard from './components/DashBoard/Dashboard';
import Login from './components/Login/Login';
import ClassList from './components/ClassList/ClassList';
import StudentList from './components/StudentList/StudentList';
import StudentDetails from './components/StudentDetails/StudentDetails';
import TeacherDetails from './components/TeacherDetails/TeacherDetails';
import Navbar from './components/Navbar/Navbar';
import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <HashRouter className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='class-list' element={<ClassList />} />
        <Route path='student-list' element={<StudentList />} />
        <Route path='student-details' element={<StudentDetails />} />
        <Route path='teacher-details' element={<TeacherDetails />} />
      </Routes>
    </HashRouter>
  );
}

export default App;