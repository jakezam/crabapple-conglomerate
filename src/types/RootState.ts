import { SettingsState } from 'app/containers/Settings/types';
import { SellerProfilePageState } from 'app/containers/SellerProfilePage/types';
import { SignInPageState } from 'app/containers/SignInPage/types';
import { FooterState } from 'app/containers/Footer/types';
import { SignupState } from 'app/containers/Signup/types';
import { DiscoverState } from 'app/containers/Discover/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  sellerProfilePage?: SellerProfilePageState;
  signinPage?: SignInPageState;
  signup?: SignupState;
  footer?: FooterState;
  settings?: SettingsState;
  discover?: DiscoverState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
