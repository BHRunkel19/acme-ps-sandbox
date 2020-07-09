import { connect } from 'react-redux';
import Body from '../../components/body/body.js';
import { withRouter } from 'react-router-dom';

// To update navigation
const mapStateToProps = (state) => {
	return {
		title: 'Demo App'
	}
}



const FinalBody = withRouter(connect(mapStateToProps, null)(Body));
export default FinalBody;
