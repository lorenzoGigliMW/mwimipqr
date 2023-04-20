import App from "../App";
import {taskEdit,taskAdd,taskCancel,taskToggle,taskSeeAll,taskVisualTodo} from "../redux/actions/imipqr"
import{connect} from 'react-redux'

const mapStateToProps = (state) => {
  
  return {
    //tasks:state.prova.tasks
  };
};

  const mapDispatchToProps = (
    dispatch
  ) => {
    return {
      getMenu:()=> dispatch(getMenu()),
      agileInstantByIndex:()=> dispatch(agileInstantByIndex()),
      agileDossierByStock:()=> dispatch(agileDossierByStock())
    };
  };
  export default connect(mapStateToProps,mapDispatchToProps)(App);