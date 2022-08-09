import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import HomeView from "../../views/HomeView";
import TodosView from "../../views/TodosView";
import NotFoundView from "../../views/NotFoundView";

const Navigation = ({ isLoggedIn }) => (
  <>
    <Switch>
      <Route exact path="/" component={HomeView} />
      <Route exact path="/todos">
        {!isLoggedIn ? <Redirect to="/" /> : <TodosView />}
      </Route>
      <Route component={NotFoundView} />
    </Switch>
  </>
);

const mapStateToProps = (state) => ({
  isLoggedIn: state.user.username.isLoggedIn,
});

export default connect(mapStateToProps, null)(Navigation);
