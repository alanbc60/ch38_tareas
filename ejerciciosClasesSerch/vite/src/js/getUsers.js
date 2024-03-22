


const getUsersUsignFetch = async( url ) => {
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        const users = data.data;
        console.log( users );
        return users;
        
    } catch (error) {
        console.error( error );
    }

}

export {getUsersUsignFetch};