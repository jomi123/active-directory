import { Admin, Resource, defaultTheme } from "react-admin";
import { BrowserRouter } from "react-router-dom";
import { dataProvider } from "./providers/dataprovider";
import { authProvider } from "./providers/authProvider";
import { Login } from "./pages/login";
import { ProjectList } from "./pages/project/list";
import { ProjectCreate } from "./pages/project/create";
import { ProjectEdit } from "./pages/project/edit";
import { ProjectShow } from "./pages/project/show";
import { EmployeeList } from "./pages/employee/list";
import { EmployeeShow } from "./pages/employee/show";
import { EmployeeEdit } from "./pages/employee/edit";
import { EmployeeCreate } from "./pages/employee/create";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import red from "@mui/material/colors/red";

const myTheme = {
  ...defaultTheme,
  palette: {
    primary: {
      main: "#7B61FF",
    },
    secondary: {
      main: "#000",
    },
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
};

const App = () => {
  return (
    <BrowserRouter>
      <Admin
        dataProvider={dataProvider}
        authProvider={authProvider}
        loginPage={Login}
        theme={myTheme}
      >
        <Resource
          name="projects"
          list={ProjectList}
          show={ProjectShow}
          edit={ProjectEdit}
          create={ProjectCreate}
          recordRepresentation={(record) => record.title}
          icon={LibraryBooksIcon}
        />
        <Resource
          name="employees"
          list={EmployeeList}
          show={EmployeeShow}
          edit={EmployeeEdit}
          create={EmployeeCreate}
          icon={AssignmentIndIcon}
        />
      </Admin>
    </BrowserRouter>
  );
};

export default App;
