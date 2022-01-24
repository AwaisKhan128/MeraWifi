import {check,request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import { Platform } from 'react-native';

const Platform_Camera_Permisson =
{
    android: PERMISSIONS.IOS.CAMERA

}

const Request_Permission_Type = {
    camera:Platform_Camera_Permisson
}

const Permission_Type = {
    camera : 'camera'
}


class AppPermission  {
    checkPermission  = async (type) : Promise<boolean> =>
    {
        const Permissions = Request_Permission_Type[type][Platform.OS]
        if (!Permissions)
        {
            return true;
        }

        try{

            const result = await check(Permissions)
    
            if (result === RESULTS.GRANTED) return true
            return this.requestPermission(Permissions)
        }
        catch (error){
            return false
        }
    }


    requestPermission = async (Permissions): Promise<boolean> => {
        try{
            const result = await request(Permissions)
            console.log("App Permission Results",result)
            return result === RESULTS.GRANTED;

        }catch(error)
        {
            console.log("App Permission error",error)

            return false

        }
    }
}


const Permission = new AppPermission()


export {Permission,Permission_Type}