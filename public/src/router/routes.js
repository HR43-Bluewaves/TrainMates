import { useHistory } from 'react-router-dom';

const routes = {
  handleTrainers: () => {
    const history = useHistory();
    history.push('/trainers');
  },

  handleClasses: () => {
    const history = useHistory();
    history.push('/classes');
  },
};

export default routes;
