const users =[];

function userJoin(socketId,username,group){
    const user ={socketId:socketId,username:username,group:group}
    users.push(user);

    return user;
}

function getGroupUsers(group){
    return users.filter(user=>user.group===group)
}

function getCurrentUser(id,username,group){
    const user = {socketId:id,username:username,group:group}
    return user;
}

module.exports={userJoin,getGroupUsers,getCurrentUser}