import {Service} from 'react-services-injector';

class User extends Service {
    constructor() {
        super();
        this.changeUser(null);
      }
    
      changeUser(username) {
        this._currentUser = username;
      }
    
      get currentUser() {
        return this._currentUser;
      }
}

//"publicName" property is important if you use any kind of minimization on your JS
User.publicName = 'User';

export default User;