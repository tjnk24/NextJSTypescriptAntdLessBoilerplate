
import componentWithReducer from '__store/componentWithReducer';

import Page from './Page';
import {reducers} from '../../slices';

export default componentWithReducer(reducers)(Page);
