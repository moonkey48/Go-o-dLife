import {getDatabase,ref,set,onValue,off,child, get,remove} from 'firebase/database';

class StorageService{
    constructor(app){
        this.db = getDatabase(app);
    }

    saveDatabase = (userId, user)=>{
        set(ref(this.db, 'users/' + userId), user);
    }
    readData = (userId, callback) =>{
        const query = ref(this.db, 'users/' + userId);
        onValue(query, (snapshot) => {
            const user = snapshot.val();
            callback(user);
        });
        return ()=>off(query);
    }
    deleteData = (userId) =>{
        remove(ref(this.db, 'users/' + userId));
    }
    readAllData = (callback) =>{
        const query = ref(this.db, 'users/');

        get(child(query, `/`)).then((snapshot) => {
            if (snapshot.exists()) {
                const value = snapshot.val();
                value && callback(value);
            } else {
                console.log("No data available");
            }
            }).catch((error) => {
               console.error(error);
            });
    }
    
}
export default StorageService;