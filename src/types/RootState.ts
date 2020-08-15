//import { FooterState } from 'app/containers/Footer/types'; UNCOMMENT THIS WHEN MERGING
import { SignupState } from 'app/containers/Signup/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  signup?: SignupState;
  //footer?: FooterState UNCOMMENT THIS LINE WHEN MERGING WITH A BRANCH THAT HAS THE FOOTER
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
