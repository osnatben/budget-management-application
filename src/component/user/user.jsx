import Details from "../details/Details";
import { observer } from "mobx-react-lite";
import Grid from '../Grid'

const User = observer(({ index }) => {
  return (
    <li>
      <Details></Details>
      <Grid></Grid>
    </li>
  );
});

export default User;

