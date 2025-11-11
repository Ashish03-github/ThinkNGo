import LoginBackground from '../../source/modules/Auth/Login/assets/LoginBackground';
import Pagination1 from '../../source/modules/Onboarding/assets/Pagination1';
import Pagination2 from '../../source/modules/Onboarding/assets/Pagination2';
import Pagination3 from '../../source/modules/Onboarding/assets/Pagination3';
import Family from './Family';
import Female from './Female';
import Flag from './Flag';
import Google from './Google';
import Male from './Male'
import User_F from './User-F'
import User_M from './User-M'

export const IconList = {
    user_m: User_M,
    user_f: User_F,
    family: Family,
    female: Female,
    male: Male,
    google: Google,
    flag: Flag,

    // Pagination
    pagination1: Pagination1,
    pagination2: Pagination2,
    pagination3: Pagination3,

    // Login
    loginBackground: LoginBackground
} as const;



