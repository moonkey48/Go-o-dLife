import {getDatabase,ref,set} from 'firebase/database';

class StorageService{
    constructor(app){
        this.db = getDatabase(app);
    }

    setDatabase = (userId, nickname ,name, email)=>{
        set(ref(this.db, 'users/' + userId), {
            nickname: nickname,
            username: name,
            email: email,
        });
    }
    
}
export default StorageService;