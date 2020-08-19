import { FooterState } from 'app/containers/Footer/types';
import { SignupState } from 'app/containers/Signup/types';
import { DiscoverState } from 'app/containers/Discover/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  signup?: SignupState;
  footer?: FooterState;
  discover?: DiscoverState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
