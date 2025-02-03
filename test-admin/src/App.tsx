import {
  Admin,
  Resource,
  ShowGuesser,
} from "react-admin";
import { UserList } from "./users";
import { dataProvider } from "./dataProvider";
import { PostList , PostEdit,PostCreate} from "./post";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import { Dashboard } from "./Dashboard";
import {authProvider } from "./authProvider";

export const App = () => (
  <Admin dataProvider={dataProvider} dashboard={Dashboard} authProvider={authProvider}>
    <Resource name="users" list = {UserList} show={ShowGuesser} icon={UserIcon}/>
    <Resource name="posts" list={PostList}  edit={PostEdit} create={PostCreate} icon={PostIcon}/>
  </Admin>
);
