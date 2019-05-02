const LOCALAPI = "http://localhost:3000"

export const getAuthToken = (loginInfo) => {
	console.log(loginInfo)
    return fetch(`${LOCALAPI}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(loginInfo)
    }).then(res => res.json())
}

export const addNewUser = (name, password) => {
    return fetch(`${LOCALAPI}/users`, {
        method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: name,
                password: password
            })
        }).then(res => res.json())
    }

    export const getUserInfo = (id) => {
        return fetch(`${LOCALAPI}/users/${id}`).then(res => res.json())
    }


// export const fetchIngredients = (ingredient, pageNumber) => {
// 	return fetch("http://localhost:3000/fetch", {
// 		method: "GET",
// 		headers: new Headers({
// 			'ingredient': ingredient,
// 			// 'pageNumber': pageNumber
// 		})
// 	}).then(res => res.json())
// }

// export const fetchTitle = (title) => {
// 	return fetch("http://localhost:3000/fetch", {
// 		method: "GET",
// 		headers: new Headers({
// 			'title': title
// 		})
// 	}).then(res => res.json())
// }
