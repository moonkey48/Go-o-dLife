import {getDatabase,ref,set,onValue,off,child, get} from 'firebase/database';

class StorageService{
    constructor(app){
        this.db = getDatabase(app);
    }

    setDatabase = (userId, nickname , email,purpose,test,toDoList, day, testDay)=>{
        set(ref(this.db, 'users/' + userId), {
            uid: userId,
            nickname: nickname,
            email: email,
            purpose:purpose,
            test:test,
            toDoList:toDoList,
            day:day,
            testDay:testDay,
        });
    }
    readData = (userId, callback) =>{
        const query = ref(this.db, 'users/' + userId);
        onValue(query, (snapshot) => {
            const user = snapshot.val();
            callback(user);
        });
        return ()=>off(query);
    }
    readAllData = (callback) =>{
        const query = ref(this.db, 'users/');

        get(child(query, `/`)).then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());
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