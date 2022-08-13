import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { RootState } from "../../redux/store";
import HomeView from "../../views/HomeView";
import TodosView from "../../views/TodosView";
import NotFoundView from "../../views/NotFoundView";

interface INavProps {
  isLoggedIn?: boolean;
}

const Navigation: React.FC<INavProps> = ({ isLoggedIn }) => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/todos">
          {!isLoggedIn ? <Redirect to="/" /> : <TodosView />}
        </Route>
        <Route component={NotFoundView} />;
      </Switch>
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  isLoggedIn: state.user.username.isLoggedIn,
});

export default connect(mapStateToProps, null)(Navigation);
